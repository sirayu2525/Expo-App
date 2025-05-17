'use client';

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function Sidebar() {
  const router = useRouter();

  const handleExternalRedirect = () => {
    const cookies = document.cookie;
    const token = cookies
      .split('; ')
      .find((row) => row.startsWith('_vercel_jwt='))
      ?.split('=')[1];

    if (token) {
      const encoded = encodeURIComponent(token);
      const targetUrl = `http://localhost:8501?jwt=${encoded}`;
      window.location.href = targetUrl;
    } else {
      alert('JWTが見つかりません');
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">メニュー</Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <SheetTitle className="text-lg font-bold">メニュー</SheetTitle>
        <nav className="flex flex-col gap-4 mt-8">
          <Link href="/top" className="hover:underline">イベント予約</Link>
          <Link href="/create" className="hover:underline">イベント作成</Link>
          <Link href="/me" className="hover:underline">マイページ</Link>
          <Link href="/login" className="hover:underline">ログイン</Link>

          {/* ✅ 外部ドメインへのリンク */}
          <button onClick={handleExternalRedirect} className="text-left hover:underline text-blue-600">
            外部アプリへ移動
          </button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
