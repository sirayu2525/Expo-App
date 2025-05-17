-- CreateTable
CREATE TABLE "badge" (
    "badgeId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "badge_pkey" PRIMARY KEY ("badgeId")
);

-- CreateTable
CREATE TABLE "badgeList" (
    "badgeId" INTEGER NOT NULL,
    "trigger" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "badgeList_pkey" PRIMARY KEY ("badgeId")
);

-- AddForeignKey
ALTER TABLE "badge" ADD CONSTRAINT "badge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
