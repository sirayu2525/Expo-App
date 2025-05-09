// app/hello/page.tsx
'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function HelloPage() {
  const { data: session, status } = useSession();
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status !== 'authenticated') return;

    const fetchHello = async () => {
      try {
        const res = await fetch('/api/hello');
        console.log(res);
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || '不明なエラー');
        setMessage(`${data.message}：${data.user.name} さん`);
      } catch (err: any) {
        setError(err.message || 'エラーが発生しました');
      }
    };

    fetchHello();
  }, [status]);

  if (status === 'loading') return <p>セッション確認中...</p>;
  if (error) return <p>エラー: {error}</p>;

  return (
    <div>
      <h1>Hello Page</h1>
      {message ? <p>{message}</p> : <p>データ取得中...</p>}
    </div>
  );
}
