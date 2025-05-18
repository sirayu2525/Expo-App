'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await fetch('https://my-go-app-4-5-440582633184.asia-northeast2.run.app/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // ← Cookieを受け取るために必要
        body: JSON.stringify({ email, password }),
      });
      // console.log('Response:', res); // デバッグ用
      // const { token } = await res.json();
      // if (!token) {
      //   setError('トークンが取得できませんでした');
      //   return;
      // }

      if (!res.ok) {
        const err = await res.json();
        setError(err.error || 'ログインに失敗しました');
        return;
      }

      // document.cookie = `jwt=${token}; path=/; SameSite=None; Secure`;


      // Cookieは自動的に保存されるので、何も保存しなくてOK
      router.push('/top');
    } catch (err) {
      setError('通信エラー');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h1 className="text-xl font-bold mb-4">ログイン</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="space-y-4">
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          ログイン
        </button>
        <p className="text-sm text-center mt-4">
          アカウントをお持ちでない方は{' '}
          <Link href="/signup" className="text-blue-500 hover:underline">
            新規登録
          </Link>
        </p>
      </div>
    </div>
  );
}
