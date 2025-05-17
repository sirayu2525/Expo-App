import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function RedirectPage() {
  // SSRコンポーネントでも cookies() は使用可能
  const cookieStore = cookies();
  const jwt = (await cookieStore).get('jwt')?.value;

  // JWTがなければログインにリダイレクト
  if (!jwt) {
    redirect('/login');
  }

  const encoded = encodeURIComponent(jwt);
  const targetUrl = `http://localhost:8051?token=${encoded}`;

  redirect(targetUrl);
}
