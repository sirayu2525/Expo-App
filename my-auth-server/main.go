package main

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"my-auth-server/models" // ← go.mod の module 名と合わせる
)

func main() {
	// .env 読み込み
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}

	// 環境変数からDSNを取得
	dsn := os.Getenv("DATABASE_URL")
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("DB接続失敗:", err)
	}

	// Userテーブルのデータを取得
	var users []models.User
	if err := db.Find(&users).Error; err != nil {
		log.Fatal("ユーザー取得失敗:", err)
	}

	fmt.Println("ユーザー一覧:")
	for _, u := range users {
		fmt.Println(u.UserID, u.Point)
	}
}
