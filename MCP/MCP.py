print("MCP.py started", flush=True)

import os,sys
# このファイルの１つ上のフォルダ（=Expo-App）をパスに追加
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if ROOT not in sys.path:
    sys.path.append(ROOT)

# server.py
from mcp.server.fastmcp import FastMCP
from SNS import db2 as db   # 絶対パスでインポート

print('FLAG0000')

PDB = db.PostgresDB()

print('FLAG0001')

# サーバー名を "DemoServer" として初期化
#mcp = FastMCP("EXPO_MCP")#,debug=True)

mcp = FastMCP(
    "EXPO_MCP",
    stateless_http=True,
    host="127.0.0.1",
    port=3333,
    path = '/mcp',
    debug=True
)

print('FLAG0002')

'''# ── ツールの定義 ──
@mcp.tool()
def get_post(user_id: str) -> list[str]:
    """「user_id」のユーザーがSNSで過去に投稿した内容の一覧をリストで取得することが出来ます。"""
    record_list = PDB.query(
    table="sns",
    column="userId",
    value=user_id
    )
    post_list = []
    for i in record_list:
        post_list.append(i[2])
    return post_list
'''

@mcp.tool(name="ping", description="pong を返します")
def ping() -> str:
    return "pong"


# ── ツールの定義 ──
@mcp.tool(
    name="get_post",
    description="ユーザーIDを指定すると、そのユーザーの過去のSNS投稿をリストで返します。"
)
def get_post(user_id: str) -> list[str]:
    """SNS 投稿一覧を取得するツール"""
    print('get_post')  # デバッグ用
    record_list = PDB.query(
        table="sns",
        column="userId",
        value=user_id
    )
    post_list: list[str] = []
    for rec in record_list:
        post_list.append(rec[2])
    if post_list == []:
        post_list = ['まだ投稿はありません。']
    # デバッグ用サンプルを返したい場合は以下を使ってください
    # post_list = ['りんご飴食べました〜！']
    return post_list


@mcp.tool(
    name="get_events",
    description="イベントの一覧(イベントの名前と詳細)をリストで取得することが出来ます。"
)
def get_events() -> list[str]:
    print('get_events')
    record_list = PDB.fetch_top(
        table = 'event_table',
        limit = 20,
        order_by = 'createdAt',
        desc = True)
    event_list = []
    for i in record_list:
        event_list.append('イベント名：「'+i[2]+'」 イベント詳細：'+i[3])
    #event_list = ['イベント名：りんご飴食べ食べ大会　イベント詳細：りんご飴ををいっぱい食べる大会を開きます。']
    return event_list


print('FLAG0003')


#transport = os.getenv("MCP_TRANSPORT", "streamable-http") # デフォルトでStreamable HTTP
#logger.info(f"Starting server '{server.name}' with transport '{transport}'...")
#mcp.run(transport=transport) # サーバ実行！


'''mcp.run(
    transport="streamable-http",
    base_url="http://127.0.0.1:3333"#,
    #path="/mcp"
)'''

mcp.run(transport="streamable-http")

#mcp.run(transport="streamable-http://127.0.0.1:3333/mcp")
#mcp.run(transport="streamable-http")
#mcp.run(host="127.0.0.1", port=3333)
#mcp.run(transport='stdio')

print('FLAG0004')
