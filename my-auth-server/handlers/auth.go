package handlers

import (
	"fmt"
	"net/http"
	"time"

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
		if input.Email == "" || input.Password == "" {
			return c.JSON(http.StatusBadRequest, echo.Map{"error": "email and password are required"})
		}

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
