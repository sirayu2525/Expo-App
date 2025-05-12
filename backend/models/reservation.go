package models

import "time"

type Reservation struct {
	ID         uint `gorm:"primaryKey"`
	UserID     uint
	EventID    uint
	Status     string // "予約済み" または "キャンセル"
	ReservedAt time.Time
}
