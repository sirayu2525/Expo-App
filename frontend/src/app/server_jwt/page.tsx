// サーバーページからのJWTトークンを使用して（どこかのサーバーにリクエストをなげレスポンスを取得して）
// クライアントに返すベース
import { decode } from 'next-auth/jwt';
import { cookies } from 'next/headers';

export default async function Page() {
    const cookieStore = await cookies();
    console.log('Cookies:', cookieStore.getAll());
    const token = cookieStore.get('next-auth.session-token')?.value;
    console.log('JWT:', token); // JWTをコンソールに出力

    // decodeを使ってJWTをデコードすることも可能
    const decodedToken = await decode({
        token,
        secret: process.env.NEXTAUTH_SECRET!,
    });
    console.log('Decoded JWT:', decodedToken); // デコードしたJWTをコンソールに出力

    if (!token) {
        return <p>JWTがありません</p>;
    }
    return (
        <div>
            <h1>Test Page</h1>
            {decodedToken ? (
                <>
                <p>name : {decodedToken.name}</p>
                <p>id : {decodedToken.id}</p>
                </>
            ) : (
                <p>JWTのデコードに失敗しました</p>
            )}
        </div>
    )
}
