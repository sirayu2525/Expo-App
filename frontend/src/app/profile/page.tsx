import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function ProfilePage() {
  // Cookie から JWT を取得（App Router構成ではこれ）
  const cookieStore = cookies(); // ← 一度変数に代入
  const token = await getToken({
    req: { headers: { cookie: cookieStore.toString() } } as any,
  });
  if (!token || !token.accessToken) {
    return <p>ログインしていません。</p>;
  }

  const res = await fetch("http://localhost:8080/api/profile", {
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
    },
    cache: "no-store", // 毎回新しい情報を取得
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
