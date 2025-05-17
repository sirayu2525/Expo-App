/*
  Warnings:

  - You are about to drop the column `trigger` on the `badgeList` table. All the data in the column will be lost.
  - You are about to drop the `badge` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[badgeId]` on the table `event_table` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "badge" DROP CONSTRAINT "badge_userId_fkey";

-- AlterTable
ALTER TABLE "badgeList" DROP COLUMN "trigger";

-- AlterTable
ALTER TABLE "event_table" ADD COLUMN     "badgeId" INTEGER;

-- DropTable
DROP TABLE "badge";

-- CreateTable
CREATE TABLE "UserBadge" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "badgeId" INTEGER NOT NULL,

    CONSTRAINT "UserBadge_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserBadge_userId_badgeId_key" ON "UserBadge"("userId", "badgeId");

-- CreateIndex
CREATE UNIQUE INDEX "event_table_badgeId_key" ON "event_table"("badgeId");

-- AddForeignKey
ALTER TABLE "event_table" ADD CONSTRAINT "event_table_badgeId_fkey" FOREIGN KEY ("badgeId") REFERENCES "badgeList"("badgeId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBadge" ADD CONSTRAINT "UserBadge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBadge" ADD CONSTRAINT "UserBadge_badgeId_fkey" FOREIGN KEY ("badgeId") REFERENCES "badgeList"("badgeId") ON DELETE RESTRICT ON UPDATE CASCADE;
