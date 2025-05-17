/*
  Warnings:

  - You are about to drop the column `eventId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `capa` on the `event_table` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `event_table` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,timeSlotId]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `timeSlotId` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hostId` to the `event_table` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_eventId_fkey";

-- DropForeignKey
ALTER TABLE "event_table" DROP CONSTRAINT "event_table_userId_fkey";

-- DropIndex
DROP INDEX "Reservation_userId_eventId_key";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "eventId",
ADD COLUMN     "timeSlotId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT,
ADD COLUMN     "profile" TEXT;

-- AlterTable
ALTER TABLE "event_table" DROP COLUMN "capa",
DROP COLUMN "userId",
ADD COLUMN     "hostId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "TimeSlot" (
    "timeSlotId" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL,
    "endAt" TIMESTAMP(3) NOT NULL,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "TimeSlot_pkey" PRIMARY KEY ("timeSlotId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_userId_timeSlotId_key" ON "Reservation"("userId", "timeSlotId");

-- AddForeignKey
ALTER TABLE "event_table" ADD CONSTRAINT "event_table_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeSlot" ADD CONSTRAINT "TimeSlot_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "event_table"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_timeSlotId_fkey" FOREIGN KEY ("timeSlotId") REFERENCES "TimeSlot"("timeSlotId") ON DELETE RESTRICT ON UPDATE CASCADE;
