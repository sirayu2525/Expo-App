import auth
import db2 as db
import streamlit as st
import os
import time
import datetime

import qrcode
from io import BytesIO
import cv2

from pyzbar import pyzbar
import numpy as np

import asyncio
from agents import Agent, Runner, RunConfig
from agents.mcp.server import MCPServerStdio

#from agents.mcp.server import MCPServerHttp
from agents.mcp.server import MCPServer
from agents.mcp.server import MCPServerStreamableHttp

import requests
from PIL import Image

from dotenv import load_dotenv
load_dotenv()

#import streamlit as st
import base64

login_flag = True

params = st.query_params
print(params)

jwt_token = params.get("jwt", [None])
print(jwt_token)


def run_async(coro):
    """Streamlit 上で安全に async 関数を呼び出すためのラッパー"""
    try:
        loop = asyncio.get_event_loop()
    except RuntimeError:
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)

    if loop.is_running():
        return asyncio.ensure_future(coro)
    else:
        return loop.run_until_complete(coro)



async def suggest_event(user_id):
    # ──── ① APIキーの存在チェック ────
    if "OPENAI_API_KEY" not in os.environ:
        raise RuntimeError("Please set the OPENAI_API_KEY environment variable")

    

#    mcp_server = MCPServerHttp(
#        base_url='http://127.0.0.1:3333',
#        cache_tools_list=True
#    )

    mcp_server = MCPServerStreamableHttp(
        params={
           "url": "http://127.0.0.1:3333/mcp",   # ご自身のMCPサーバーURLを設定
        },
        cache_tools_list=True,
        client_session_timeout_seconds=30.0,
    )

    async with mcp_server:
        print("Flag0000: MCP server ready")

        # ──── ③ Agent定義 ────
        agent = Agent(
            name="EXPO_Agent",
            instructions=(
                "あなたは以下のツールを必ず使って回答するアシスタントです。\n"
                "1) get_post(user_id: str) → 指定ユーザーの過去SNS投稿をリストで返す\n"
                "2) get_events() → 最新20件のイベント名と詳細を返す\n"
                "ユーザーIDが渡されたら必ず get_post を呼び出し、その結果を元におすすめイベントを提案してください。"
            ),
            mcp_servers=[mcp_server],
        )
        print("Flag0001: Agent instantiated")

        prompt = f"ユーザーIDが「{user_id}」のユーザーにおすすめのイベントを紹介してください。また、ユーザーの投稿情報やイベント情報は全て見せてください。エラーが起きたらエラーの内容も見せてください"
        print("Flag0002: Prompt ready")

        # ──── ④ モデル指定して実行 ────
        run_cfg = RunConfig(model="gpt-4o")
        result = await Runner.run(agent, prompt, run_config=run_cfg)

        print("Agent response:\n", result.final_output)
    return result.final_output









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

# 投稿カードレンダリング関数
def render_post_card(content: str, good_list: list, time_str: str,user_id: str, post_id:str):
    #print('#####：',content,good_list,time_str)
    # タイムスタンプを datetime に変換
    try:
        time_obj = datetime.fromisoformat(time_str.rstrip("Z"))
    except Exception:
        time_obj = time_str
    ts = time_obj.strftime("%Y-%m-%d %H:%M") if hasattr(time_obj, 'strftime') else time_obj

    with st.container():
        # 投稿内容
        st.markdown('---')
        st.markdown('#### '+content+'')
        st.markdown('`' + user_id + '`')
        
        # 投稿日時表示
        st.markdown(
            f"<span style='color:gray;font-size:12px;'>投稿日時: {ts}</span>",
            unsafe_allow_html=True
        )
        # いいねボタンと数表示
        like_key = f"like_{time_str}_{hash(content)}"
        if st.button(f"👍 いいね {len(good_list)}", key=like_key):
            # テスト用：'current_user' を追加
            if user_id in good_list:
                new_good_list = [i for i in good_list if i != user_id]
                good_list = new_good_list
            else:
                good_list.append(user_id)
            PDB.update(table = 'sns',update_data = {'good':good_list},where_params={'postId':post_id})
            st.rerun()

        # いいねしたユーザーID一覧
        with st.expander("いいねしたユーザーを表示"):
            if good_list:
                for uid in good_list:
                    st.write(f"- {uid}")
            else:
                st.write("まだいいねはありません。")


# 1) 画像ファイルを読み込んで base64 にエンコード
def get_base64_of_bin_file(bin_file):
    with open(bin_file, 'rb') as f:
        data = f.read()
    return base64.b64encode(data).decode()

# 2) CSS を生成
def set_bg_and_overlay(png_file, text):
    b64 = get_base64_of_bin_file(png_file)
    css = f"""
    <style>
    /* Streamlit アプリ全体 */
    .stApp {{
        position: relative;
        height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;
        /* 透過PNG背景 */
        background-image: url("data:image/png;base64,{b64}");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: auto 100vh;
        overflow: hidden;
    }}
    """
    st.markdown(css, unsafe_allow_html=True)
    #st.write(f'{text}さん<br>おかえりなさい')










if not login_flag:
    st.subheader("ログインのタイムアウト")
    st.error("ログインの有効期限が過ぎました。以下のボタンをクリックして再度ログインしてください。")
    st.markdown('[ログインページ](http://google.com)')
else:
    # レイアウト: サイドバー
    st.sidebar.title("サービス一覧")
    #st.sidebar.write(f"ようこそ, {user('userId')}")
    mode = st.sidebar.radio("画面選択", ['ホーム','SNS', 'おすすめイベント','バッジ交換'])


    if mode == 'ホーム':
        # 3) ページが読み込まれたら背景設定を呼び出す
        # 背景＋オーバーレイを一度に設定
        set_bg_and_overlay("backpic.png", user_id)

    if mode == 'SNS':
        st.header("EXPO SNS")
        PDB = db.PostgresDB()
        #st.subheader("投稿する")
        new_post = st.text_area("投稿内容を入力してください！", height=100)
        if st.button("投稿"):
            if new_post.strip():
                PDB.insert('sns', {'content':new_post,'userId':user_id})
                st.success("投稿しました！")
            else:
                st.error("投稿内容を入力してください。")
        st.markdown("---")
        st.subheader("タイムライン")

        post_record = PDB.fetch_top('sns',10,"time",True)
        print(post_record)
        for post in post_record:
            print(post)
            if post[3] == None:
                good_list = []
            else:
                good_list = post[3]
            render_post_card(
                content=post[2],
                good_list=good_list,
                time_str=str(post[4]),
                user_id=user_id,
                post_id = post[0]
            )

    #response = None

    if mode == 'おすすめイベント':
        st.header("おすすめイベント")
        if st.button('AI Suggest'):
            with st.spinner('AI提案中...'):
                response = run_async(suggest_event(user_id))
                #response = suggest_event(user_id)
            st.write(response)

    if mode == 'バッジ交換':
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
        st.header("デジタル万博ピン交換")
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