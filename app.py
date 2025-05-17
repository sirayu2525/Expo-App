import auth
import db
import streamlit as st

# レイアウト: サイドバー
st.sidebar.title("SNS メニュー")
#st.sidebar.write(f"ようこそ, {user('userId')}")
mode = st.sidebar.radio("画面選択", ['ホーム', 'プロフィール', '設定'])

params = st.query_params


if mode == 'ホーム':
    st.subheader("投稿する")
    new_post = st.text_area("何を投稿しますか？", height=100)
    if st.button("投稿"):  
        if new_post.strip():
            st.success("投稿しました！")
        else:
            st.error("投稿内容を入力してください。")
    st.markdown("---")
    st.subheader("タイムライン")