import { getUserFromJwt } from '@/components/auth'; // 上記を保存した場所に合わせて
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const user = await getUserFromJwt();

  if (!user) {
    redirect('/login'); // 認証失敗でリダイレクト
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">ダッシュボード</h1>
      <p>ユーザーID: {user.sub}</p>
    </div>
  );
}
