import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');

  if (!authHeader?.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Missing or malformed token' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1];

  try {
    const secret = process.env.SECRET_KEY!;
    const decoded = jwt.verify(token, secret); // ← HS256用の検証

    return NextResponse.json({ user: decoded });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}
