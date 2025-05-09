import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const token = await getToken({ req, raw: true }); // ← ここでJWT文字列を取得
  console.log('JWT:', token); // JWTをコンソールに出力
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return new NextResponse(token); // JWTをそのまま返す
}
