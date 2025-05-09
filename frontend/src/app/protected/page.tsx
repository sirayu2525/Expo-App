'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProtectedData = async () => {
      if (status !== 'authenticated') return;

      try {
        const jwt = await fetch('/api/auth/token').then((res) => res.text());

        const res = await fetch('/api/protected', {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setResponse(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchProtectedData();
  }, [status]);

  if (status === 'loading') return <p>セッション確認中...</p>;
  if (error) return <p>エラー: {error}</p>;

  return (
    <div>
      <h1>保護されたページ</h1>
      {response ? (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      ) : (
        <p>読み込み中...</p>
      )}
    </div>
  );
}
