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

		fmt.Println("受信:", input.Email)
		fmt.Println("受信:", input.Password)

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
		fmt.Println("発行:", signedToken)

		cookie := &http.Cookie{
			Name:     "jwt",
			Value:    signedToken,
			HttpOnly: false,
			Secure:   true, // ローカルならfalse、本番はtrue
			Path:     "/",
			SameSite: http.SameSiteNoneMode,
			// Partitioned: true,
			MaxAge: 60 * 60 * 24, // 1日
		}
		c.SetCookie(cookie)
		return c.JSON(http.StatusOK, cookie.Value)

	}
}

func ExtractUserIDFromToken(c echo.Context) (string, error) {
	cookie, err := c.Cookie("jwt")
	if err != nil {
		return "", echo.NewHTTPError(http.StatusUnauthorized, "missing JWT cookie")
	}

	tokenStr := cookie.Value
	fmt.Println("受信:", tokenStr)

	secret := os.Getenv("SECRET_KEY")
	token, err := jwt.Parse(tokenStr, func(t *jwt.Token) (interface{}, error) {
		if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, echo.NewHTTPError(http.StatusUnauthorized, "unexpected signing method")
		}
		return []byte(secret), nil
	})
	if err != nil || !token.Valid {
		return "", echo.NewHTTPError(http.StatusUnauthorized, "invalid token")
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok || claims["sub"] == nil {
		return "", echo.NewHTTPError(http.StatusUnauthorized, "invalid claims")
	}

	userID, ok := claims["sub"].(string)
	if !ok {
		return "", echo.NewHTTPError(http.StatusUnauthorized, "userID not string")
	}

	return userID, nil
}

func MeHandler(db *gorm.DB) echo.HandlerFunc {
	return func(c echo.Context) error {
		userID, err := ExtractUserIDFromToken(c)
		if err != nil {
			return err // JWTの問題ならこのままエラーを返す
		}

		var user models.User
		if err := db.Table("User").Where(`"userId" = ?`, userID).First(&user).Error; err != nil {
			return echo.NewHTTPError(http.StatusNotFound, "user not found")
		}

		return c.JSON(http.StatusOK, echo.Map{
			"userId":    user.UserID,
			"email":     user.Email,
			"point":     user.Point,
			"createdAt": user.CreatedAt,
		})
	}
}
