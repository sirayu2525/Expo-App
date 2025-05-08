// app/page.tsx
'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <main>
      {session ? (
        <>
          <p>ログイン済み: {session.user!.name}</p>
          <button onClick={() => signOut()}>ログアウト</button>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </>
      ) : (
        <>
          <button onClick={() => signIn('discord')}>Discordでログイン</button>
        </>   
      )}
    </main>
  );
}
