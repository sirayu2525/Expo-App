'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">ようこそ 👋</h1>
      <img src="/src/app/images/myakumyaku.png" alt="Logo" className="w-32 h-32 mb-4" />
      <div className="space-x-4">
        <Link
          href="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          ログイン
        </Link>
        <Link
          href="/signup"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          サインアップ
        </Link>
      </div>
      <div className="mt-8">
        <Link
          href="/dashboard"
          className="text-blue-600 hover:underline"
        >
          ダッシュボードに移動
        </Link>
      </div>
    </main>
  );
}
