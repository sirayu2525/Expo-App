import os,sys
# このファイルの１つ上のフォルダ（=Expo-App）をパスに追加
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if ROOT not in sys.path:
    sys.path.append(ROOT)

# server.py
from mcp.server.fastmcp import FastMCP
from SNS import db2 as db   # 絶対パスでインポート

PDB = db.PostgresDB()

user_id = '38990d55-6751-434c-ab0a-3f43ff4be185'

record_list = PDB.query(
        table="sns",
        column="userId",
        value=user_id
    )
post_list: list[str] = []
for rec in record_list:
    post_list.append(rec[2])


print(record_list)
print(post_list)