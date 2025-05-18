import sys
import os

# このファイルの１つ上のフォルダ（=Expo-App）をパスに追加
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if ROOT not in sys.path:
    sys.path.append(ROOT)

from SNS import auth
from SNS import db2 as db
import streamlit as st
import os
import time
import datetime

from dotenv import load_dotenv
load_dotenv()

from escpos.printer import Usb
from PIL import Image


import requests
from PIL import Image
from io import BytesIO


login_flag = True

params = st.query_params
print(params)

jwt_token = params.get("jwt", [None])
print(jwt_token)




try:
    SECRET_KEY = os.getenv("JWT_SECRET_KEY")
    decoder = auth.JWTDecoder(SECRET_KEY)

    params = st.query_params
    print(params)

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
except Exception as e:
    print(f"他のエラーが発生しました: {e.args[0]}") 
    login_flag = False


def badge_draw(name, image_url):
    response = requests.get(image_url)
    # 2. バイト列を BytesIO にラップして PIL で読み込む
    img = Image.open(BytesIO(response.content))

    st.write(name)
    st.image(
        img,
        caption="これはPILで読み込んだ画像です",  # キャプション（省略可）
        use_column_width=True,                  # カラム幅に合わせてリサイズ
        clamp=True                              # 色値オーバー／アンダーをクリップ
    )
    if st.button('印刷'):
        MAX_WIDTH = 512  # お使いのプリンタの最大ドット幅に合わせる
        if img.width > MAX_WIDTH:
            ratio = MAX_WIDTH / img.width
            new_height = int(img.height * ratio)
            # Pillow v10以降: Image.Resampling.LANCZOS
            resample_filter = (
                Image.Resampling.LANCZOS
                if hasattr(Image, 'Resampling')
                else Image.LANCZOS
            )
            img = img.resize((MAX_WIDTH, new_height), resample=resample_filter)

        # ----------------------------
        # ③ ESC/POS プリンタへ送信
        # ----------------------------
        VENDOR_ID  = 0x6868  # 実機のベンダーIDに合わせてください
        PRODUCT_ID = 0x0200  # 実機のプロダクトIDに合わせてください
        INTERFACE  = 0      # USBインターフェース番号

        p = Usb(VENDOR_ID, PRODUCT_ID, INTERFACE)
        p.set(align='center')  # 中央寄せ
        p.image(img)           # PIL.Image オブジェクトを直接渡してもOKです
        p.cut()                # 用紙カット
        st.success("印刷しました！")



if not login_flag:
    st.subheader("ログインのタイムアウト")
    st.error("ログインの有効期限が過ぎました。以下のボタンをクリックして再度ログインしてください。")
    st.markdown('[ログインページ](http://google.com)')
else:
    # レイアウト: サイドバー
    st.sidebar.title("サービス一覧")
    #st.sidebar.write(f"ようこそ, {user('userId')}")
    mode = st.sidebar.radio("画面選択", ['バッジプリントアウト','特殊'])


    
    st.header("バッジプリント")
    PDB = db.PostgresDB()
    if mode == 'バッジプリントアウト':
        st.markdown('### '+user_id+'さん ようこそ')
        record_list = PDB.query(table = 'UserBadge',column = 'userId',value = user_id)
        badge_list = []
        for i in record_list:
            now_id = i[2]
            now_badge = PDB.query(table = 'badgeList',column = 'badgeId',value = now_id)
            badge_draw(now_badge[1], now_badge[2])
            
            


    #st.subheader("投稿する")
    if mode == '特殊':
        # ----------------------------
        # ① プリントしたい画像を読み込む
        # ----------------------------
        if st.button("印刷"):
            image_path = "thank_you.png"  # 出力したい画像ファイルのパス
            img = Image.open(image_path)
            

            # ----------------------------
            # ② プリンタの幅に合わせてリサイズ（必要に応じて）
            # ----------------------------
            MAX_WIDTH = 512  # お使いのプリンタの最大ドット幅に合わせる
            if img.width > MAX_WIDTH:
                ratio = MAX_WIDTH / img.width
                new_height = int(img.height * ratio)
                # Pillow v10以降: Image.Resampling.LANCZOS
                resample_filter = (
                    Image.Resampling.LANCZOS
                    if hasattr(Image, 'Resampling')
                    else Image.LANCZOS
                )
                img = img.resize((MAX_WIDTH, new_height), resample=resample_filter)

            # ----------------------------
            # ③ ESC/POS プリンタへ送信
            # ----------------------------
            VENDOR_ID  = 0x6868  # 実機のベンダーIDに合わせてください
            PRODUCT_ID = 0x0200  # 実機のプロダクトIDに合わせてください
            INTERFACE  = 0      # USBインターフェース番号

            p = Usb(VENDOR_ID, PRODUCT_ID, INTERFACE)
            p.set(align='center')  # 中央寄せ
            p.image(img)           # PIL.Image オブジェクトを直接渡してもOKです
            p.cut()                # 用紙カット
            st.success("印刷しました！")