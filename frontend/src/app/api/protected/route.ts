import { decode } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('Authorization');
  console.log('Authorization Header:', authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'トークンがありません' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1];
  console.log('JWT:', token);

  try {
    const decoded = await decode({
      token,
      secret: process.env.NEXTAUTH_SECRET!,
    });

    if (!decoded) {
      return NextResponse.json({ error: 'トークンの復号に失敗しました' }, { status: 403 });
    }

    return NextResponse.json({
      message: '認証成功',
      user: decoded,
    });
  } catch (err) {
    console.error('JWT decode error', err);
    return NextResponse.json({ error: '無効なトークンです' }, { status: 403 });
  }
}
