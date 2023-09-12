/*
  Warnings:

  - Made the column `organisationId` on table `Board` required. This step will fail if there are existing NULL values in that column.
  - Made the column `boardId` on table `Tag` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_organisationId_fkey";

-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_boardId_fkey";

-- AlterTable
ALTER TABLE "Board" ALTER COLUMN "organisationId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Tag" ALTER COLUMN "boardId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
