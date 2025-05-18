import streamlit as st
import random
import string
import qrcode
from io import BytesIO
import cv2
from pyzbar import pyzbar
import numpy as np

import os,sys

from dotenv import load_dotenv

# このファイルの１つ上のフォルダ（=Expo-App）をパスに追加
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if ROOT not in sys.path:
    sys.path.append(ROOT)

from SNS import db2 as db
from SNS import auth

import requests
from PIL import Image

import time

load_dotenv()

login_flag = True

params = st.query_params
print(params)

jwt_token = params.get("jwt", [None])
print(jwt_token)

print('FLAG00000')

if True:
    SECRET_KEY = os.getenv("JWT_SECRET_KEY")
    decoder = auth.JWTDecoder(SECRET_KEY)

    print('FLAG00001')

    params = st.query_params
    print(params)

    print('FLAG00002')

    jwt_token = params.get("jwt", [None])
    print(jwt_token)

    #jwt_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDc1MzczNjcsInN1YiI6IjgxMTUyNTM3LWFlZjctNDhlOS04NjIzLWUxZTk1ZGNmYTVlZCJ9.wZbtEL8TwudVj0SttW3AkeRSXXNw3mktF1uQh50ekzc'

    user_id = decoder.get_user_id(jwt_token)
    exp = decoder.get_expiration(jwt_token)
    print(f"ユーザーID: {user_id}")
    print(f"有効期限 (exp): {exp}")
    print(time.time())
    if exp <= time.time():
        login_flag = False
#except Exception as e:
#    print(f"他のエラーが発生しました: {e.args[0]}") 
#    login_flag = False



if not login_flag:
    st.subheader("ログインのタイムアウト")
    st.error("ログインの有効期限が過ぎました。以下のボタンをクリックして再度ログインしてください。")
    st.markdown('[ログインページ](http://google.com)')
else:
    # ----------------------
    # QRコード画像生成関数
    # ----------------------
    def generate_qr_code(data):
        qr = qrcode.QRCode(version=1, box_size=10, border=4)
        qr.add_data(data)
        qr.make(fit=True)
        img = qr.make_image(fill_color="black", back_color="white")
        buf = BytesIO()
        img.save(buf, format="PNG")
        buf.seek(0)
        return buf

    # ----------------------
    # QRコード読み取り関数（OpenCV + pyzbar）
    # ----------------------
    def read_qr_from_camera():
        cap = cv2.VideoCapture(0)
        st.info("カメラを起動中... QRコードをかざしてください。")

        detected_code = None
        placeholder = st.empty()

        while True:
            ret, frame = cap.read()
            if not ret:
                break

            decoded_objs = pyzbar.decode(frame)

            for obj in decoded_objs:
                code = obj.data.decode("utf-8")
                detected_code = code

                points = obj.polygon
                pts = [(p.x, p.y) for p in points]

                for i in range(len(pts)):
                    pt1 = pts[i]
                    pt2 = pts[(i + 1) % len(pts)]
                    cv2.line(frame, pt1, pt2, (0, 255, 0), 2)

                cv2.putText(frame, code, (pts[0][0], pts[0][1] - 10),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.9, (255, 0, 0), 2)

            frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            placeholder.image(frame_rgb, channels="RGB")

            if detected_code:
                st.success(f"QRコード検出: {detected_code}")
                break

        cap.release()
        return detected_code

    # ----------------------
    # UI構成
    # ----------------------
    st.set_page_config(page_title="デジタル万博ピン交換", layout="centered")
    st.title("デジタル万博ピン交換")
    st.write(user_id)

    st.header("🔁 ピンを出す")


    PDB = db.PostgresDB()


    record_list = PDB.query(table = 'UserBadge',column = 'userId',value = user_id)
    badge_list = []
    for i in record_list:
        print('Record_List_0000：：'+str(i))
        now_id = i[2]
        now_badge = PDB.query(table = 'badgeList',column = 'badgeId',value = now_id)[0]
        print('now_badge：：'+str(now_badge))
        response = requests.get(now_badge[2])
        # 2. バイト列を BytesIO にラップして PIL で読み込む
        img = Image.open(BytesIO(response.content))

        st.write('ID：'+str(now_badge[0]))
        st.write('名前：'+str(now_badge[1]))
        st.image(
            img,
            caption=str(now_badge[1]),  # キャプション（省略可）
            use_container_width=True,                  # カラム幅に合わせてリサイズ
            clamp=True                              # 色値オーバー／アンダーをクリップ
        )

        badge_list.append(now_badge[0])


    selected_pin_ID = st.selectbox("交換に出すピンを選んでください", badge_list)
    if st.button("QRコードを発行"):
        # user_pins.remove(selected_pin) // 交換後に削除する場合はコメントアウトを外す
        st.success(f"ピン『{selected_pin_ID}』のQRコードを発行しました")
        qr_buf = generate_qr_code(selected_pin_ID)
        st.image(qr_buf)


    # ----------------------
    # ピンを受け取る方法
    # ----------------------
    st.header("📥 ピンを受け取る")



    if st.button("📸 カメラでQRを読み取る"):
        code_from_cam = read_qr_from_camera()
        if code_from_cam:
            result = PDB.query(
                table="badgeList",
                column="badgeId",
                value=code_from_cam
            )
            print(result)
            if result == []:
                st.error("❌ QRコードは無効でした")
            else:
                PDB.insert(table = 'UserBadge', data = {'userId':user_id,'badgeId':code_from_cam})
                st.success(f"🎉 『{code_from_cam}』 を受け取りました！（QRから）")
        else:
            st.error("❌ QRコードは無効でした")

