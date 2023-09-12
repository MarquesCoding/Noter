/*
  Warnings:

  - Made the column `userId` on table `Organisation` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Organisation" DROP CONSTRAINT "Organisation_userId_fkey";

-- AlterTable
ALTER TABLE "Organisation" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Organisation" ADD CONSTRAINT "Organisation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
