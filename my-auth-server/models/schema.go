package models

import (
	"time"
)

type User struct {
	UserID    string    `gorm:"column:userId;primaryKey"`
	Password  string    `gorm:"column:password"`
	Email     string    `gorm:"column:email;uniqueIndex"` // unique制約を追加
	Point     int       `gorm:"column:point;default:0"`
	CreatedAt time.Time `gorm:"column:createdAt;default:current_timestamp"`
	UpdatedAt time.Time `gorm:"column:updatedAt;default:current_timestamp"`
}

func (User) TableName() string {
	// Prismaスキーマと一致させる（デフォルトは "User"）
	return "User"
}

type Event struct {
	EventID     int       `gorm:"column:eventId;primaryKey;autoIncrement"`
	UserID      string    `gorm:"column:userId"`
	EventName   string    `gorm:"column:eventName"`
	Title       string    `gorm:"column:title"`
	Description string    `gorm:"column:description"`
	CreatedAt   time.Time `gorm:"column:createdAt;default:current_timestamp"`
	StartsAt    time.Time `gorm:"column:startsAt"`
	EndsAt      time.Time `gorm:"column:endsAt"`
	Capa        int       `gorm:"column:capa"`
	IsDeleted   bool      `gorm:"column:isDeleted;default:false"`
	UpdatedAt   time.Time `gorm:"column:updatedAt;default:current_timestamp"`
}

func (Event) TableName() string {
	// Prismaスキーマと一致させる（@@map("event_table")）
	return "event_table"
}

type Reservation struct {
	ReservationID int        `gorm:"column:reservationId;primaryKey;autoIncrement"`
	UserID        string     `gorm:"column:userId"`
	EventID       int        `gorm:"column:eventId"`
	Status        string     `gorm:"column:status;type:varchar(20)"` // enumに対応
	ReservedAt    time.Time  `gorm:"column:reservedAt;default:current_timestamp"`
	CanceledAt    *time.Time `gorm:"column:canceledAt"` // nullable
}

func (Reservation) TableName() string {
	return "Reservation"
}
