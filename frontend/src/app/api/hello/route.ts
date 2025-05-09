// app/api/hello/route.ts
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const token = await getToken({ req });
  console.log('JWT:', token); // JWTをコンソールに出力

  if (!token) {
    return NextResponse.json({ error: '未認証です' }, { status: 401 });
  }

  // 必要なデータだけ返す（例: name と email）
  return NextResponse.json({
    message: '認証成功',
    user: {
      name: token.name,
      email: token.email,
      id: token.id,
    },
  });
}
