# server.py
from mcp.server.fastmcp import FastMCP
from ..SNS import db2 as db

PDB = db.PostgresDB()

# サーバー名を "DemoServer" として初期化
mcp = FastMCP("EXPO_MCP")

'''# ── ツールの定義 ──
@mcp.tool()
def get_post(user_id: str) -> list[str]:
    """「user_id」のユーザーがSNSで過去に投稿した内容の一覧をリストで取得することが出来ます。"""
    record_list = db.query(
    table="sns",
    column="userId",
    value=user_id
    )
    post_list = []
    for i in record_list:
        post_list.append(i[2])
    return post_list
'''

# ── リソースの定義 ──
@mcp.resource("get_post://{user_id}")
def get_post(user_id: str) -> list[str]:
    """「user_id」のユーザーがSNSで過去に投稿した内容の一覧をリストで取得することが出来ます。"""
    record_list = db.query(
    table="sns",
    column="userId",
    value=user_id
    )
    post_list = []
    for i in record_list:
        post_list.append(i[2])
    return post_list


@mcp.resource("get_events")
def get_events() -> list[str]:
    """イベントの一覧(イベントの名前と詳細)をリストで取得することが出来ます。"""
    record_list = db.fetch_top(
        table = 'event_table',
        limit = 20,
        order_by = 'time',
        decs = True)
    event_list = []
    for i in record_list:
        event_list.append('イベント名：「'+i[2]+'」 イベント詳細：'+i[3])
    return event_list

# 直接実行されたときにサーバーを立ち上げる
if __name__ == "__main__":
    # 標準入力／出力（STDIO）で待ち受け
    mcp.run()
