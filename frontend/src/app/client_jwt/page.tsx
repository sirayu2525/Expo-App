// クライアントページからのJWTトークンを使用してレスポンスを取得するベース
'use client';

import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/proxy/");
        if (!res.ok) {
          setError(`Goサーバーへのリクエストに失敗しました（${res.status}）`);
          return;
        }
        const result = await res.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || "エラーが発生しました");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p>読み込み中...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>プロフィール</h1>
      {data ? (
        <>
          <p> Name : {data.name}</p>
          <p> ID : {data.id}</p>
        </>
      ) : (
        <p>データがありません。</p>
      )}
    </div>
  );
}
