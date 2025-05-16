// lib/auth.ts
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function getUserFromCookie() {
  const token = (await cookies()).get('jwt')?.value;
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY!) as { sub: string };
    return decoded; // { sub: userId }
  } catch {
    return null;
  }
}
