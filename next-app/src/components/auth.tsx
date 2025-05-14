import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

type JwtPayload = {
    sub: string;
    iat?: number;
    exp?: number;
};

export async function getUserFromJwt() {
  const token = await (await (cookies())).get('jwt')?.value;
  if (!token) return null;

  try {
    const secret = process.env.SECRET_KEY!;
    const decoded = jwt.verify(token, secret) as JwtPayload;
    return decoded;
  } catch {
    return null;
  }
}
