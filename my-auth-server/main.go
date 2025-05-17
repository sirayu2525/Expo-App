package main

import (
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"

	"my-auth-server/handlers"
)

func main() {
	_ = godotenv.Load()
	dsn := os.Getenv("DIRECT_URL")

	if dsn == "" {
		log.Fatal("DIRECT_URL 環境変数が設定されていません")
	}

	// データベース接続のデバッグ情報を出力
	log.Println("DB接続文字列の長さ:", len(dsn))
	// DSNの最初の10文字だけログに出力（セキュリティのため）
	if len(dsn) > 10 {
		log.Println("DB接続文字列の先頭:", dsn[:10]+"...")
	}

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		PrepareStmt: false,
		Logger:      logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		log.Fatal("DB接続失敗:", err)
	}

	// DB接続テスト
	sqlDB, err := db.DB()
	if err != nil {
		log.Fatal("DB設定取得エラー:", err)
	}

	err = sqlDB.Ping()
	if err != nil {
		log.Fatal("DBへの接続確認に失敗:", err)
	} else {
		log.Println("DBへの接続確認成功")
	}

	// マイグレーションチェック
	// if err := db.AutoMigrate(&models.User{}); err != nil {
	// 	log.Println("マイグレーション警告:", err)
	// }

	e := echo.New()

	e.Pre(middleware.CORSWithConfig(middleware.CORSConfig{
		// ワイルドカードではなく明示的に許可する
		AllowOrigins: []string{
			"http://localhost:3000",                                  // ローカルで Next.js 等を動かす場合
			"https://expo-ip2onysml-sirayu2525s-projects.vercel.app", // デプロイ先（本番）
		},
		AllowMethods:     []string{http.MethodGet, http.MethodPost, http.MethodOptions},
		AllowHeaders:     []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept, echo.HeaderAuthorization},
		AllowCredentials: true,
	}))
	// ミドルウェア設定
	// e.Use(middleware.Logger())
	// e.Use(middleware.Recover())
	// e.Use(middleware.CORS())

	e.POST("/signup", handlers.SignupHandler(db))

	e.POST("/signin", handlers.SigninHandler(db))

	e.GET("/me", handlers.MeHandler(db))

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("サーバーを開始: :%s\n", port)
	e.Logger.Fatal(e.Start(":" + port))
}
