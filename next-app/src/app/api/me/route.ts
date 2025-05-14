import { verify } from 'jsonwebtoken';

export async function GET(req: Request) {
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  try {
    const decoded = verify(token, process.env.SECRET_KEY!);
    return Response.json({ userId: decoded.sub });
  } catch {
    return new Response('Unauthorized', { status: 401 });
  }
}
