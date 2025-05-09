'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (status !== 'authenticated') return;

      try {
        const res = await fetch('http://localhost:8080/api/profile',  {
        headers: {
            Authorization: `Bearer ${session?.user?.image}`, // ← JWTではなくdiscordId（仮にidを使っているなら）
        },
        });
        

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchData();
  }, [status, session]);

  if (status === 'loading') return <p>セッション確認中...</p>;
  if (status === 'unauthenticated') return <p>ログインしてください</p>;
  if (error) return <p>エラー: {error}</p>;

  return (
    <div>
      <h1>プロフィール</h1>
      {data ? (
        <>
          <p>Discord ID: {data.discordId}</p>
          <p>{data.message}</p>
        </>
      ) : (
        <p>データ取得中...</p>
      )}
    </div>
  );
}
