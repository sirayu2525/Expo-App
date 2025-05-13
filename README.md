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


## 第３案
 JWT認証基盤構成メモ（Next.js + Go + HS256）

### 目的

* Supabaseや外部OAuthを使用せず、**自前の認証基盤**を構築する。
* 軽量で通信効率に優れた **HS256によるJWT** を使って、どの言語/サービスからでも検証可能な構成を目指す。

---

### システム構成

```
[Next.js Frontend]
  └─→ ユーザーがログインフォームから ID/PW を送信
     └─→ [Go Auth Server]
           └─→ ID/PW 確認 → JWT(签名付き) 発行
     → JWTをCookie/ローカルに保存
     → APIリクエストのHeaderに付与
        → [Go or Other Language API]
             → JWTを検証し userId を抽出
```

---

### JWT署名方式

* **HS256（HMAC + SHA-256）** を採用
* 同じ "secret key" を持つサービスであれば、どの言語でもJWTを検証可

---

### Go側: JWT発行 & 検証

#### JWT発行

```go
claims := jwt.MapClaims{
  "sub": userID,
  "exp": time.Now().Add(time.Hour).Unix(),
}
token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
signedToken, _ := token.SignedString(secretKey)
```

#### JWT検証

```go
token, _ := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
  return secretKey, nil
})
claims := token.Claims.(jwt.MapClaims)
userID := claims["sub"].(string)
```

---

### Next.js側: JWT受け取り & API投げ

#### JWTを受け取って保存

```ts
const res = await fetch("https://your-auth-server.com/login", ...);
const { token } = await res.json();
localStorage.setItem("jwt", token);
```

#### API投げ

```ts
const token = localStorage.getItem("jwt");
await fetch("/api/protected", {
  headers: { Authorization: `Bearer ${token}` }
});
```

---

### HS256 JWT構成の通信メリット

| 項目       | JWT検証分散型 | セッション中心型 |
| -------- | -------- | -------- |
| 認証情報の確認元 | 各アプリ内    | セッションDB  |
| 追加通信     | なし       | 毎回DBアクセス |
| 水平スケーリング | 容易       | 難しい      |
| 言語間の共通運用 | 可        | 言語依存しがち  |

---

### HS256のチョークポイント

* 秘密鍵が各サービスに分配されていることが前提
* 鍵の温度管理(セクレットマネージャ/ボリューム管理)が重要
* 慣れると分散型マイクロサービスにも実装しやすい

---

### 現行構成の最終確定

#### アーキテクチャ構成

| レイヤー    | 技術                                 | 補註                           |
| ------- | ---------------------------------- | ---------------------------- |
| 認証      | Go + Echo + bcrypt + HS256 JWT     | Supabase Authは使わない           |
| データベース  | SupabaseポストグレSQL                   | Prismaでテーブル生成，GORMは読み取りのみに利用 |
| フロントエンド | Next.js                            | JWTを取得・保存してAPI通信             |
| ユーザー情報  | usersテーブル (UUIDプライマリキー)            | Supabase auth.users は使用しない   |
| 認可      | JWT内"sub" でuserID判定                | Go側で検証                       |
| インフラ    | Supabase(DBホスティング) + VPS or Vercel | DBだけSupabase                 |

---

### Prisma側のユーザーモデル

```prisma
model User {
  userId     String         @id @default(uuid())
  password   String
  point      Int
  events     Event[]        @relation("UserEvents")
  reservations Reservation[]

  createdAt  DateTime       @default(now())
  updatedAt  DateTime       @updatedAt
}
```

* 現在はUUIDの文字列として認識。
* GORM側では`string` or `uuid.UUID`で対応可

---

### 今後の拡張案

* JWTクレームに第三チャネルサイン(補働, role)
* JWTをhttpOnly Cookieで保存(セキュリティ向上)
* JWTのリフレッシュト対応(refresh token)
* CLIやバッチAPIからの利用
* JWTで保護されたAPIエンドポイント(例: /me)の実装

---

以上を基盤にすれば「自前のログイン・認証エンジン」を极めて簡潔に構築できます。


### 開発手順（全体構成）
▶️ STEP 1：Prisma で DB スキーマ構築
schema.prisma を整備（userId: String @id @default(uuid())）

DATABASE_URL に Supabase の接続情報を設定（.env）

マイグレーション実行：

bash
コピーする
編集する
npx prisma migrate dev --name init
Supabase Studioまたは Prisma Studio でテーブル確認

▶️ STEP 2：Go (GORM) 側で DB にアクセス
GORMで User, Event, Reservation の構造体定義
例：

go
コピーする
編集する
type User struct {
  UserID    string `gorm:"column:user_id;primaryKey"`
  Password  string
  Point     int
  CreatedAt time.Time
  UpdatedAt time.Time
}
.env に Supabase の PostgreSQL 接続設定を記述

gorm.Open(...) で接続し、AutoMigrate() は しない（PrismaがDB定義を管理）

▶️ STEP 3：JWTを使った自前認証サーバーの構築（Go）
/signup：UUIDを生成して登録、パスワードはbcryptでハッシュ化

/signin：パスワード照合後JWT発行（subにuserIdを格納）

/me：JWT検証 → sub からユーザー情報取得して返す

🔐 JWTの署名キーは .env の SECRET_KEY から取得

▶️ STEP 4：Next.js 側のログイン機能
ログイン画面（email, password）から /signin にPOST

返却されたJWTを localStorage または httpOnly Cookie に保存

保護APIリクエスト時に Authorization: Bearer <token> をヘッダーに付与

▶️ STEP 5：JWT保護されたAPIの作成
APIルート例：GET /me

処理：

AuthorizationヘッダーからJWT抽出

VerifyJWT()で検証し userId 取得

GORMで userId に一致するユーザーをDBから取得

ユーザー情報をJSONで返す

🎯 フロー全体イメージ
plaintext
コピーする
編集する
[Next.js ログインフォーム]
  ↓ POST /signin
[Go 認証サーバー]
  ↓ JWT返却
[Next.js]
  ↓ JWT保存 & Authorizationに付与
[Next.js → /me 呼び出し]
  ↓ JWT検証（Go）
  ↓ DB照合（GORM） → ユーザー情報をレスポンス
💡補足：中間ステップごとにテスト推奨
ステップ	テスト内容
Prismaマイグレーション完了時	Supabase Studioでテーブル構造確認
GoのDB接続確認時	db.Find(&[]User{}) などでテーブル存在確認
JWT発行/検証	CLIやPostmanで発行・検証ロジックの確認
Next.jsとの通信	fetch() or Axios でログイン処理確認
最終的な /me	JWT付きリクエストで想定レスポンスが返ることを確認



# 苦労点
jwt認証とOAuth
pgbouncerとprepared statement
