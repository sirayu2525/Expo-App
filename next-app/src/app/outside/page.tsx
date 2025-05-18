import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getUserFromCookie } from '@/lib/auth';

export default async function RedirectPage() {
  const cookieStore = cookies();
  const jwt = (await cookieStore).get('jwt')?.value;
  // const user = getUserFromCookie()
  // if(!user) redirect("/login")


  // JWTがなければログインにリダイレクト
  if (!jwt) {
    redirect('/login');
  }

  const encoded = encodeURIComponent(jwt);
  const targetUrl = `http://localhost:8051?token=${encoded}`;

  redirect(targetUrl);
}
