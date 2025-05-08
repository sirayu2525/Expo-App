package main

import (
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/golang-jwt/jwt/v5"
	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

var secretKey []byte

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	secretKey = []byte(os.Getenv("NEXTAUTH_SECRET"))
}

func verifyJWT(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		authHeader := c.Request().Header.Get("Authorization")
		if !strings.HasPrefix(authHeader, "Bearer ") {
			return echo.NewHTTPError(http.StatusUnauthorized, "missing token")
		}

		tokenStr := strings.TrimPrefix(authHeader, "Bearer ")

		token, err := jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, jwt.ErrSignatureInvalid
			}
			return secretKey, nil
		})

		if err != nil || !token.Valid {
			return echo.NewHTTPError(http.StatusUnauthorized, "invalid token")
		}

		claims := token.Claims.(jwt.MapClaims)
		c.Set("discordId", claims["discordId"]) // フロントが埋めたもの
		return next(c)
	}
}

func main() {
	e := echo.New()

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Echo server is running.")
	})

	// CORS対策など（必要に応じて）
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// 認証が必要なルート
	api := e.Group("/api")
	api.Use(verifyJWT)

	api.GET("/profile", func(c echo.Context) error {
		id := c.Get("id")
		return c.JSON(http.StatusOK, echo.Map{
			"message":   "JWT 検証成功",
			"discordId": id,
		})
	})

	e.Logger.Fatal(e.Start(":8080"))
}
