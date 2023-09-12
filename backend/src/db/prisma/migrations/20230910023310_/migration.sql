/*
  Warnings:

  - Made the column `organisationId` on table `Role` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_organisationId_fkey";

-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "organisationId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
