package handlers

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/golang-jwt/jwt"
	"github.com/google/uuid"
	"github.com/labstack/echo/v4"
	"golang.org/x/crypto/bcrypt"

	"my-auth-server/models"

	"gorm.io/gorm"
)

type SignupInput struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func SignupHandler(db *gorm.DB) echo.HandlerFunc {
	return func(c echo.Context) error {
		var input SignupInput
		if err := c.Bind(&input); err != nil {
			return c.JSON(http.StatusBadRequest, echo.Map{"error": "invalid request"})
		}

		fmt.Println("受信:", input.Email)
		fmt.Println("受信:", input.Password)
		// if input.Email == "" || input.Password == "" {
		// 	return c.JSON(http.StatusBadRequest, echo.Map{"error": "email and password are required"})
		// }

		hashedPassword, err := bcrypt.GenerateFromPassword([]byte(input.Password), bcrypt.DefaultCost)
		if err != nil {
			return c.JSON(http.StatusInternalServerError, echo.Map{"error": "password encryption failed"})
		}

		user := models.User{
			UserID:    uuid.New().String(),
			Password:  string(hashedPassword),
			Email:     string(input.Email),
			Point:     0,
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
		}

		if err := db.Create(&user).Error; err != nil {
			return c.JSON(http.StatusInternalServerError, echo.Map{"error": "failed to create user"})
		}

		return c.JSON(http.StatusCreated, echo.Map{"message": "user created"})
	}
}

type SigninInput struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func SigninHandler(db *gorm.DB) echo.HandlerFunc {
	return func(c echo.Context) error {
		var input SigninInput
		if err := c.Bind(&input); err != nil {
			return c.JSON(http.StatusBadRequest, echo.Map{"error": "invalid request"})
		}

		// DBからユーザー検索
		var user models.User
		if err := db.Where("email = ?", input.Email).First(&user).Error; err != nil {
			return c.JSON(http.StatusUnauthorized, echo.Map{"error": "user not found"})
		}

		// パスワード照合
		if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(input.Password)); err != nil {
			return c.JSON(http.StatusUnauthorized, echo.Map{"error": "invalid password"})
		}

		// JWT発行
		token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
			"sub": user.UserID,
			"exp": time.Now().Add(time.Hour * 24).Unix(),
		})

		secret := os.Getenv("SECRET_KEY")
		signedToken, err := token.SignedString([]byte(secret))
		if err != nil {
			return c.JSON(http.StatusInternalServerError, echo.Map{"error": "failed to generate token"})
		}

		return c.JSON(http.StatusOK, echo.Map{"token": signedToken})
	}
}
