# Expo-App
2025年５月ハッカソン

## ChatGPT案

### Discord OAuth + NextAuth.js + JWT + Go連携ドキュメント

#### 【概要】

Next.js (フロントエンド) で Discord OAuth を用いてログインし、NextAuth.js を使って JWT の発行を行い、Go でそれを検証して認証済みユーザーを判定する構成のドキュメントです。

---

#### 【技術構成】

* ログイン処理は Next.js + NextAuth.js で完結
* JWT (サーバーサイドで検証可)を発行
* Go側は「Authorization: Bearer <JWT>」を利用してユーザー判別

---

#### 【NextAuth.jsの設定】

 `app/api/auth/[...nextauth]/route.ts`

```ts
import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt", // JWT を使用
  },
  callbacks: {
    async jwt({ token, profile }) {
      if (profile) {
        token.discordId = profile.id;
        token.email = profile.email;
        token.name = profile.username;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.discordId = token.discordId;
      session.user.email = token.email;
      session.user.name = token.name;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
```

---

#### 【ログインボタンコンポーネント】

```tsx
'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthButton() {
  const { data: session } = useSession();

  return session ? (
    <div>
      <p>{session.user.name} さんとしてログイン中</p>
      <button onClick={() => signOut()}>ログアウト</button>
    </div>
  ) : (
    <button onClick={() => signIn("discord")}>Discordでログイン</button>
  );
}
```

---

#### 【JWT を Go API に渡す】

##### ヘッダーに JWT を付ける

```ts
await fetch("http://localhost:8080/api/protected", {
  headers: {
    Authorization: `Bearer ${yourAccessToken}`,
  },
});
```

> `yourAccessToken` は NextAuth.js の JWT を `getToken()` で取得

---

#### 【Go側: JWT の検証】

##### Goの JWT 検証メソッド

```go
import (
  "github.com/golang-jwt/jwt/v5"
  "os"
  "net/http"
  "strings"
  "github.com/gin-gonic/gin"
)

var secretKey = []byte(os.Getenv("NEXTAUTH_SECRET"))

func VerifyJWT(c *gin.Context) {
  authHeader := c.GetHeader("Authorization")
  if !strings.HasPrefix(authHeader, "Bearer ") {
    c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "missing token"})
    return
  }

  tokenStr := strings.TrimPrefix(authHeader, "Bearer ")

  token, err := jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
    return secretKey, nil
  })

  if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
    discordId := claims["discordId"].(string)
    c.Set("discordId", discordId)
    c.Next()
  } else {
    c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "invalid token"})
  }
}
```

##### 別ルートで使用

```go
router := gin.Default()
router.GET("/api/protected", VerifyJWT, func(c *gin.Context) {
  discordId := c.MustGet("discordId").(string)
  c.JSON(200, gin.H{"msg": "Hello", "user_id": discordId})
})
```

---

#### 【.env 例】

```env
DISCORD_CLIENT_ID=xxxxx
DISCORD_CLIENT_SECRET=xxxxx
NEXTAUTH_SECRET=super-secure-random-string
```

Go側も同じ `NEXTAUTH_SECRET` を使用することに注意

---

#### 【まとめ】

* NextAuth.js は OAuthログイン & JWT発行を一括管理
* Go側は JWT の検証のみを行うシンプルな設計
* ステートレスなインフラの創出に適している


## 第二案

### 全体の流れ

[ユーザー]
 ↓ Discord OAuth
[Next.js (NextAuth)]
 ↓ getToken()で復号
 ↓ req.body = { userId, eventName }
POST /api/proxy/reservation
 ↓
[Go (Echo)]
 ↓
DB.insert(userId, eventName)

ユーザーがDiscordでのログインをする→JWT発行（ブラウザはJWTを持った状態、暗号化済み）
→クライアントページにアクセスするとJWTがNext.jsに送られて、復号と検証→中身のデータをGoのDBサーバーに送る
→例えばユーザーIDに基づいた情報をGoがDBから取得し、それをレスポンスとしてNextに返す→それをクライアントに返す
