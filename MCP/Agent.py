# client.py
import asyncio
from openai import OpenAI

from agents import Agent                   # the core Agent class
from agents.mcp.server import MCPServerStdio

async def main():
    # OpenAI クライアント初期化
    client = OpenAI()

    # server.py を標準入出力で起動する MCP サーバー
    mcp_server = MCPServerStdio(
        params={
            "command": "python",
            "args": ["MCP.py"],
        }
    )

    # コンテキストマネージャーで接続を確立
    async with mcp_server:
        # Agent を作成。MCP サーバーをツールとして登録
        agent = Agent(
            name="EXPO_Agent",
            instructions="ユーザーのSNSの投稿と実施されているイベント情報をもとに、そのユーザーにおすすめのイベントを提案してくれます。",
            mcp_servers=[mcp_server],
            llm="gpt-4o"  # 利用するモデル名
        )

        # 実行例：計算と挨拶を同時に依頼
        response = await agent.run("ユーザーIDが「"+user_id+'」のユーザーにおすすめのイベントを紹介してください。')
        print("Agent response:\n", response)

if __name__ == "__main__":
    asyncio.run(main())
