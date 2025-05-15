'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type DecodedUser = {
  sub: string;
  iat?: number;
  exp?: number;
  [key: string]: any;
};

export default function MePage() {
  const [user, setUser] = useState<DecodedUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/me', {
          credentials: 'include',
        });

        if (!res.ok) throw new Error('Unauthorized');

        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        setError('ログイン情報の確認に失敗しました。');
        router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  useEffect(() => {
    // CookieからJWTを取り出してリダイレクトURLを生成
    const cookies = document.cookie;
    const token = cookies
      .split('; ')
      .find((row) => row.startsWith('jwt='))
      ?.split('=')[1];

    if (token) {
      const encoded = encodeURIComponent(token);
      setRedirectUrl(`http://localhost:8000?token=${encoded}`);
    }
  }, []);

  const handleLogout = async () => {
    await fetch('/api/logout', {
      method: 'POST',
      credentials: 'include',
    });
    router.push('/login');
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h1 className="text-xl font-bold mb-4">マイページ</h1>
      {error && <p className="text-red-500">{error}</p>}
      {!user && !error && <p>読み込み中...</p>}
      {user && (
        <>
          <div className="space-y-4">
            <div className="space-y-2">
              <p><strong>ユーザーID:</strong> {user.sub}</p>
              <p><strong>有効期限:</strong> {user.exp ? new Date(user.exp * 1000).toLocaleString() : 'N/A'}</p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
            >
              ログアウト
            </button>
          </div>

          {redirectUrl && (
            <div className="mt-4">
              <a href={redirectUrl} className="text-blue-600 hover:underline">
                他ドメインへ移動（JWT付き）
              </a>
            </div>
          )}
        </>
      )}
    </div>
  );
}
