// 現状、これはクライアントにJWTを送り返す形になっており、セキュリティ上（XSS攻撃）良くないし、通信の無駄
// 本番環境では、JWTをクライアントに送り返すのではなく、サーバー側でトークンを取得、検証して、最終的なデータのみを返す
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
