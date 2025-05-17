# ping_server.py
from mcp.server.fastmcp import FastMCP

# debug=True で JSON-RPC のやり取りログを出す
mcp = FastMCP("PingServer", debug=True)

@mcp.tool(name="ping", description="pong を返します")
def ping() -> str:
    return "pong"

if __name__ == "__main__":
    # 起動の目印を出力（flush=True で即時表示）
    print("=== Starting PingServer ===", flush=True)
    mcp.run()
