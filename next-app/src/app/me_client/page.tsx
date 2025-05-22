'use client';

import { useEffect, useState } from 'react';

export default function MeClientPage() {
  const [user, setUser] = useState<{ id: string; name: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/me', {
          method: 'GET',
          credentials: 'include',
        });

        if (!res.ok) {
          throw new Error('認証エラー');
        }

        const data = await res.json();
        console.log(data);
        setUser(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('不明なエラー');
        }
      }
    };

    fetchUser();
  }, []);

  if (error) return <div>エラー: {error}</div>;
  if (!user) return <div>読み込み中...</div>;

  return (
    <div>
      <h1>ようこそ {user.name} さん</h1>
      <p>ユーザーID: {user.id}</p>
    </div>
  );
}
