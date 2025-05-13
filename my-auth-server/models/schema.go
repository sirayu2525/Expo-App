package models

import (
	"time"
)

type User struct {
	UserID    string    `gorm:"column:userId;primaryKey"`
	Password  string    `gorm:"column:password"`
	Email     string    `gorm:"column:email"`
	Point     int       `gorm:"column:point"`
	CreatedAt time.Time `gorm:"column:createdAt"`
	UpdatedAt time.Time `gorm:"column:updatedAt"`
}

func (User) TableName() string {
	return "User"
}

type Event struct {
	EventID     int       `gorm:"column:eventId;primaryKey;autoIncrement"`
	UserID      string    `gorm:"column:userId"`
	EventName   string    `gorm:"column:eventName"`
	Title       string    `gorm:"column:title"`
	Description string    `gorm:"column:description"`
	CreatedAt   time.Time `gorm:"column:createdAt"`
	StartsAt    time.Time `gorm:"column:startsAt"`
	EndsAt      time.Time `gorm:"column:endsAt"`
	Capa        int       `gorm:"column:capa"`
	IsDeleted   bool      `gorm:"column:isDeleted"`
	UpdatedAt   time.Time `gorm:"column:updatedAt"`
}

func (Event) TableName() string {
	return "Event"
}

type Reservation struct {
	ReservationID int        `gorm:"column:reservationId;primaryKey;autoIncrement"`
	UserID        string     `gorm:"column:userId"`
	EventID       int        `gorm:"column:eventId"`
	Status        string     `gorm:"column:status"`
	ReservedAt    time.Time  `gorm:"column:reservedAt"`
	CanceledAt    *time.Time `gorm:"column:canceledAt"` // nullable
}

func (Reservation) TableName() string {
	return "Reservation"
}
