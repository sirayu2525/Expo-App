package models

import (
	"time"
)

type User struct {
	UserID    string    `gorm:"column:user_id;primaryKey"`
	Password  string    `gorm:"column:password"`
	Point     int       `gorm:"column:point"`
	CreatedAt time.Time `gorm:"column:created_at"`
	UpdatedAt time.Time `gorm:"column:updated_at"`
}

func (User) TableName() string {
	return "User"
}

type Event struct {
	EventID     int       `gorm:"column:event_id;primaryKey;autoIncrement"`
	UserID      string    `gorm:"column:user_id"`
	EventName   string    `gorm:"column:event_name"`
	Title       string    `gorm:"column:title"`
	Description string    `gorm:"column:description"`
	CreatedAt   time.Time `gorm:"column:created_at"`
	StartsAt    time.Time `gorm:"column:starts_at"`
	EndsAt      time.Time `gorm:"column:ends_at"`
	Capa        int       `gorm:"column:capa"`
	IsDeleted   bool      `gorm:"column:is_deleted"`
	UpdatedAt   time.Time `gorm:"column:updated_at"`
}

func (Event) TableName() string {
	return "Event"
}

type Reservation struct {
	ReservationID int        `gorm:"column:reservation_id;primaryKey;autoIncrement"`
	UserID        string     `gorm:"column:user_id"`
	EventID       int        `gorm:"column:event_id"`
	Status        string     `gorm:"column:status"`
	ReservedAt    time.Time  `gorm:"column:reserved_at"`
	CanceledAt    *time.Time `gorm:"column:canceled_at"` // nullable
}

func (Reservation) TableName() string {
	return "Reservation"
}
