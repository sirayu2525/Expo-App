# client.py
import asyncio
from openai import OpenAI

from agents import Agent                   # the core Agent class
from agents.mcp.server import MCPServerStdio
import os

async def main():
    # OpenAI クライアント初期化
    client = OpenAI()

    mcp_path = os.path.join(os.path.dirname(__file__), "MCP.py")
    # server.py を標準入出力で起動する MCP サーバー
    mcp_server = MCPServerStdio(
        params={
            "command": "python",
            "args": ["-u", mcp_path],
        },
        cache_tools_list=True,                 # ツール一覧はキャッシュしておくと高速化
        client_session_timeout_seconds=30.0,    # ← デフォルト 5 秒 → 30 秒に延長
    )

    # コンテキストマネージャーで接続を確立
    async with mcp_server:
        # Agent を作成。MCP サーバーをツールとして登録
        print('Flag0000')
        agent = Agent(
            name="EXPO_Agent",
            instructions="ユーザーのSNSの投稿と実施されているイベント情報をもとに、そのユーザーにおすすめのイベントを提案してくれます。",
            mcp_servers=[mcp_server],
            llm="gpt-4o"  # 利用するモデル名
            
        )
        print('Flag0001')
        user_id = '38990d55-6751-434c-ab0a-3f43ff4be185'
        print('Flag0002')
        response = await agent.run("ユーザーIDが「"+user_id+'」のユーザーにおすすめのイベントを紹介してください。')
        print("Agent response:\n", response)

if __name__ == "__main__":
    asyncio.run(main())
