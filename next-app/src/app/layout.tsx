import './globals.css';
import { Sidebar } from '@/components/Sidebar';



export const metadata = {
  title: '予約アプリ',
  description: 'イベントの予約管理アプリ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}