# Expo-App
## DB関係
### 全体の流れ
ユーザーがemailとpasswordでユーザー作成（signup）
↓
ユーザーがログインフォームで認証情報を送信
↓
GoサーバーがJWTを発行し、HttpOnly Cookieとして保存
↓
ブラウザはCookieを自動で送信（JSからは読めない）
↓
Next.jsサーバー（Server ComponentsやAPI Routes）はCookieからJWTを読み取って検証

JWT発行サーバー：Go言語
フロントエンド、他バックエンド：Next.js
DB：Supabase

### JWTについて

JWTの署名アルゴリズムとして HS256（HMAC-SHA256）を採用しています。

他にもRS256というアルゴリズムがありますが、実装の簡単さからこちらを採用しました。
（詳しい違いの解説：https://note.com/modern_shift/n/n69e723740b67）

秘密鍵を共有している場合、どのサーバーからもそのJWTを検証することが可能です。

HS256の場合、秘密鍵でJWTを検証したりするのでそれの漏洩リスクに気を付けるべきです。
決してフロントエンドで扱ってはいけません。

JWTに入っている情報
```my-auth-server/handlers/auth.go
		// JWT発行
		token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
			"sub": user.UserID,
			"exp": time.Now().Add(time.Hour * 24).Unix(),
		})
```

### Goサーバーセットアップ

```
go mod tidy // 依存パッケージの取得
go run .   // サーバー起動
```

| メソッド   | パス        | 説明                                              |
| ------ | --------- | ----------------------------------------------- |
| `POST` | `/signup` | 新規ユーザー登録（メール＋パスワードを受け取り、ハッシュ化してDB保存）            |
| `POST` | `/signin` | ログイン（パスワード照合 → JWT発行 → `HttpOnly Cookie` に保存）   |
| `GET`  | `/me`     | Cookie内のJWTを検証し、ログイン中のユーザー情報を返す。ほとんど使ってない。                 |

my-auth-server/handlers/auth.go
エンドポイントの詳細


### nextセットアップ

```
npm install     // 依存パッケージ取得
npm run dev 　　// サーバー起動
```
もしかしたらPrismaClientを生成する必要があるかも

next-app/src/app/signup/page.tsx
ここにサインアップのページ

```
npx prisma migrate dev  // データベーススキーマの変更
npx prisma generate     // Prismaクライアントの生成
npx prisma migrate reset // 必要に応じてデータ消去
```

### GoogleCloud
```
 gcloud config get-value project
gcloud builds submit \
  --tag asia-northeast1-docker.pkg.dev/hackathon-460114/my-docker-repo/my-app:latest
```
