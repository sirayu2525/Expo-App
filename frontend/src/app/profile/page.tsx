export default async function ProfilePage() {
  // Cookie から JWT を取得（App Router構成ではこれ）
  const res = await fetch("http://localhost:3000/api/proxy/profile", {
    cache: "no-store",
  });

  if (!res.ok) {
    return <p>Goサーバーへのリクエストに失敗しました（{res.status}）</p>;
  }

  const data = await res.json();

  return (
    <div>
      { data && (
        <div>
          <h1>プロフィール</h1>
          <p>Discord ID: {data.discordId}</p>
          <p>メッセージ: {data.message}</p>
        </div>
      )}
      {!data && (
        <div>
          <h1>プロフィール</h1>
          <p>データがありません。</p>
        </div>
      )}
    </div>
  );
}
