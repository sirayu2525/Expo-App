// app/page.tsx
'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function HomePage() {
  const { data: session, status } = useSession();

  return (
    <main>
      {status === 'loading' && <p>セッション確認中...</p>}

      {session ? (
        <>
          <p>ログイン済み: {session.user?.name}</p>
          <button onClick={() => signOut()}>ログアウト</button>

          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {JSON.stringify(session, null, 2)}
          </pre>
        </>
      ) : (
        <>
          <p>ログインしていません。</p>
          <button onClick={() => signIn('discord')}>Discordでログイン</button>
        </>
      )}
    </main>
  );
}

