package main

import (
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"

	"my-auth-server/handlers"
)

func main() {
	_ = godotenv.Load()
	dsn := os.Getenv("DIRECT_URL")

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		PrepareStmt: false,
		Logger:      logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		log.Fatal("DB接続失敗:", err)
	}

	e := echo.New()

	e.POST("/signup", handlers.SignupHandler(db))

	e.Logger.Fatal(e.Start(":8080"))
}
