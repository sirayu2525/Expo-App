import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getToken({ req });

  if (!token || !token.accessToken) {
    return NextResponse.json({ error: "未認証" }, { status: 401 });
  }

  const res = await fetch("http://localhost:8080/api/profile", {
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
    },
  });

  const data = await res.json();
  return NextResponse.json(data);
}
