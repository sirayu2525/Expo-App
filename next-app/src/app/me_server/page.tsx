import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';

type JwtPayload = {
  sub: string;
  iat?: number;
  exp?: number;
};

export default async function MePage() {
  const cookieStore = cookies();
  const token = await(await (cookieStore)).get('jwt')?.value;

  if (!token) {
    redirect('/login');
  }

  let decoded: JwtPayload | null = null;

  try {
    decoded = jwt.verify(token!, process.env.SECRET_KEY!) as JwtPayload;
  } catch {
    redirect('/login');
  }

  const redirectUrl = `http://localhost:8000?token=${encodeURIComponent(token!)}`;

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h1 className="text-xl font-bold mb-4">マイページ（サーバー版）</h1>
      <div className="space-y-4">
        <div className="space-y-2">
          <p><strong>ユーザーID:</strong> {decoded.sub}</p>
          <p><strong>有効期限:</strong> {decoded.exp ? new Date(decoded.exp * 1000).toLocaleString() : 'N/A'}</p>
        </div>

        <form action="/api/logout" method="POST">
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            ログアウト
          </button>
        </form>

        <div className="mt-4">
          <a href={redirectUrl} className="text-blue-600 hover:underline">
            他ドメインへ移動（JWT付き）
          </a>
        </div>
      </div>
    </div>
  );
}
