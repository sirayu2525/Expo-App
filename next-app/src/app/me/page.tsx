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
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('jwt');
      if (!token) {
        setError('未ログインです。ログインしてください。');
        router.push('/login');
        return;
      }

      try {
        const res = await fetch('/api/me', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error('Unauthorized');

        const data = await res.json();
        console.log('Decoded JWT:', data);
        setUser(data.user);
      } catch (err) {
        setError('ログイン情報の確認に失敗しました。');
        localStorage.removeItem('jwt');
        router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h1 className="text-xl font-bold mb-4">マイページ</h1>
      {error && <p className="text-red-500">{error}</p>}
      {!user && !error && <p>読み込み中...</p>}
      {user && (
        <div className="space-y-2">
          <p><strong>ユーザーID:</strong> {user.sub}</p>
          <p><strong>有効期限:</strong> {user.exp ? new Date(user.exp * 1000).toLocaleString() : 'N/A'}</p>
        </div>
      )}
    </div>
  );
}
