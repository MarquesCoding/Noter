/*
  Warnings:

  - You are about to drop the column `socketId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "socketId",
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "UserSocketConnection" (
    "id" UUID NOT NULL,
    "socketId" TEXT NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "UserSocketConnection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "UserSocketConnection" ADD CONSTRAINT "UserSocketConnection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
