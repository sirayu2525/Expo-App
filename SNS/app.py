import auth
import db2 as db
import streamlit as st
import os
import time
import datetime

from dotenv import load_dotenv
load_dotenv()

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
        st.markdown('|' + user_id + '|' + content + '|')
        
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
        st.markdown("---")



if not login_flag:
    st.subheader("ログインのタイムアウト")
    st.error("ログインの有効期限が過ぎました。以下のボタンをクリックして再度ログインしてください。")
    st.markdown('[ログインページ](http://google.com)')
else:
    # レイアウト: サイドバー
    st.sidebar.title("SNS メニュー")
    #st.sidebar.write(f"ようこそ, {user('userId')}")
    mode = st.sidebar.radio("画面選択", ['ホーム', 'プロフィール', '設定'])


    if mode == 'ホーム':
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
