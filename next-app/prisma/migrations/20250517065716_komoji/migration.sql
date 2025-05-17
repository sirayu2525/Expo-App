/*
  Warnings:

  - You are about to drop the `SNS` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SNS" DROP CONSTRAINT "SNS_userId_fkey";

-- DropTable
DROP TABLE "SNS";

-- CreateTable
CREATE TABLE "sns" (
    "postId" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "good" TEXT[],
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sns_pkey" PRIMARY KEY ("postId")
);

-- AddForeignKey
ALTER TABLE "sns" ADD CONSTRAINT "sns_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
