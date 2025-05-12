package models

type User struct {
	UserID uint `gorm:"primaryKey"`
	Point  int
}
