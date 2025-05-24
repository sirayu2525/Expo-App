// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const origin = req.headers.get('origin');
    console.log('Origin:', origin);
    console.log('Request URL:', req.url);
    console.log('Request Method:', req.method);
    console.log('Request Headers:', req.headers);
    console.log('Request Cookies:', req.cookies);
    const allowedOrigins = [
        'https://my-next-app-440582633184.asia-northeast2.run.app',
        'http://localhost:3000',
    ];

    // プリフライトリクエストへの即応答（204 No Content）
    if (req.method === 'OPTIONS') {
        const preflight = new NextResponse(null, { status: 204 });
        if (origin && allowedOrigins.includes(origin)) {
            preflight.headers.set('Access-Control-Allow-Origin', origin);
        }
        preflight.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
        preflight.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        preflight.headers.set('Access-Control-Allow-Credentials', 'true');
        return preflight;
    }

    // 通常リクエストのレスポンスにCORSヘッダーを付加
    const response = NextResponse.next();
    if (origin && allowedOrigins.includes(origin)) {
        response.headers.set('Access-Control-Allow-Origin', origin);
        response.headers.set('Access-Control-Allow-Credentials', 'true');
    }

    // JWTの検証（CORS処理後に行う）
    const jwt = req.cookies.get('jwt')?.value;
    if (!jwt) {
        console.log('JWT not found');
        return NextResponse.redirect(new URL('/login', req.url));
    }

    console.log('JWT:', jwt);
    // ここでJWTの検証ロジックを追加することができます（例：署名の確認など）

    return response;
}

export const config = {
    matcher: ['/me', '/create', '/me_client'], // ミドルウェアを適用するルート
};
