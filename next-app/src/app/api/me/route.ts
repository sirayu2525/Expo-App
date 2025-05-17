import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function GET() {
  const token = (await cookies()).get('jwt')?.value;
  console.log('Token:', token);

  if (!token) {
    return NextResponse.json({ error: 'Missing token' }, { status: 401 });
  }

  try {
    const secret = process.env.SECRET_KEY!;
    const decoded = jwt.verify(token, secret); // HS256で検証

    return NextResponse.json({ user: decoded });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}
