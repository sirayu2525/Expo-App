package models

import "time"

type Event struct {
	EventID     uint `gorm:"primaryKey"`
	UserID      uint // 作成者
	EventName   string
	Title       string
	Description string
	CreatedAt   time.Time
	StartsAt    time.Time
	EndsAt      time.Time
	Capa        int
	ReservedNum int
	IsDeleted   bool
}
