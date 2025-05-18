# client.py
import asyncio
import os
from agents import Agent, Runner, RunConfig
from agents.mcp.server import MCPServerStdio

async def main():
    # ──── ① APIキーの存在チェック ────
    if "OPENAI_API_KEY" not in os.environ:
        raise RuntimeError("Please set the OPENAI_API_KEY environment variable")

    # ──── ② MCPサーバー起動設定 ────
    mcp_path = os.path.join(os.path.dirname(__file__), "MCP.py")
    mcp_server = MCPServerStdio(
        params={
            "command": "python",
            "args": ["-u", mcp_path],   # アンバッファードモード
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
                "ユーザーのSNSの投稿と実施されているイベント情報をもとに、"
                "指定されたユーザーにおすすめのイベントを提案してください。"
            ),
            mcp_servers=[mcp_server],
        )
        print("Flag0001: Agent instantiated")

        user_id = "38990d55-6751-434c-ab0a-3f43ff4be185"
        prompt = f"ユーザーIDが「{user_id}」のユーザーにおすすめのイベントを紹介してください。"
        print("Flag0002: Prompt ready")

        # ──── ④ モデル指定して実行 ────
        run_cfg = RunConfig(model="gpt-4o")
        result = await Runner.run(agent, prompt, run_config=run_cfg)

        print("Agent response:\n", result.final_output)

if __name__ == "__main__":
    asyncio.run(main())
