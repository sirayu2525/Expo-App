import streamlit as st
import streamlit.components.v1 as components

def redirect(url: str, wait_sec: int = 0):
    components.html(
        f"""
        <html>
          <head>
            <meta http-equiv="refresh" content="{wait_sec}; URL='{url}'" />
          </head>
        </html>
        """,
        height=0,
    )

# 即時リダイレクト
redirect("https://google.com")