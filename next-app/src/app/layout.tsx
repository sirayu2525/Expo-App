import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: '予約アプリ',
  description: 'イベントの予約管理アプリ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="flex min-h-screen bg-gray-50 text-gray-800">
        <aside className="w-64 bg-white shadow p-6">
          <h1 className="text-xl font-bold mb-6">
            <Link href="/">イベント予約</Link>
          </h1>
          <nav className="space-y-4">
            <Link href="/" className="block text-blue-600 hover:underline">ホーム</Link>
            <Link href="/create" className="block text-blue-600 hover:underline">イベント作成</Link>
            <Link href="/me" className="block text-blue-600 hover:underline">マイページ</Link>
            <Link href="/login" className="block text-blue-600 hover:underline">ログイン</Link>
          </nav>
        </aside>
        <main className="flex-1 p-6 max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
