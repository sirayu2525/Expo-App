'use client';

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Sidebar() {

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
          <Link href="/outside" className="hover:underline">
            外部アプリへ移動
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
