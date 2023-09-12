/*
  Warnings:

  - You are about to drop the column `createdById` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `canAssign` on the `RolePermissions` table. All the data in the column will be lost.
  - You are about to drop the column `canClose` on the `RolePermissions` table. All the data in the column will be lost.
  - You are about to drop the column `canComment` on the `RolePermissions` table. All the data in the column will be lost.
  - You are about to drop the column `canCreate` on the `RolePermissions` table. All the data in the column will be lost.
  - You are about to drop the column `canDelete` on the `RolePermissions` table. All the data in the column will be lost.
  - You are about to drop the column `canEdit` on the `RolePermissions` table. All the data in the column will be lost.
  - You are about to drop the column `canView` on the `RolePermissions` table. All the data in the column will be lost.
  - The `priority` column on the `Ticket` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `geoLat` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `geoLng` on the `User` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `passwordHash` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "TShirtSize" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL');

-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_createdById_fkey";

-- AlterTable
ALTER TABLE "Board" DROP COLUMN "createdById",
ADD COLUMN     "organisationId" UUID;

-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "isDefault" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "organisationId" UUID;

-- AlterTable
ALTER TABLE "RolePermissions" DROP COLUMN "canAssign",
DROP COLUMN "canClose",
DROP COLUMN "canComment",
DROP COLUMN "canCreate",
DROP COLUMN "canDelete",
DROP COLUMN "canEdit",
DROP COLUMN "canView",
ADD COLUMN     "canAssignTickets" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "canCloseTickets" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "canCommentTickets" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "canCreateBoard" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "canCreateBoardTag" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "canCreateTickets" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "canDeleteTickets" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "canEditTickets" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "canViewTickets" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Tag" ADD COLUMN     "organisationId" UUID;

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "attachments" TEXT[],
ADD COLUMN     "dueDate" TIMESTAMP(3),
ADD COLUMN     "tshirtSize" "TShirtSize",
DROP COLUMN "priority",
ADD COLUMN     "priority" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "geoLat",
DROP COLUMN "geoLng",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "passwordHash" SET NOT NULL;

-- CreateTable
CREATE TABLE "UserWebsocketConnections" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "socketId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserWebsocketConnections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organisation" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "favicon" TEXT,
    "domain" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" UUID,

    CONSTRAINT "Organisation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganisationInviteCodes" (
    "id" UUID NOT NULL,
    "code" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "organisationId" UUID NOT NULL,

    CONSTRAINT "OrganisationInviteCodes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserWebsocketConnections_socketId_key" ON "UserWebsocketConnections"("socketId");

-- CreateIndex
CREATE UNIQUE INDEX "Organisation_name_key" ON "Organisation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "OrganisationInviteCodes_code_key" ON "OrganisationInviteCodes"("code");

-- AddForeignKey
ALTER TABLE "UserWebsocketConnections" ADD CONSTRAINT "UserWebsocketConnections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organisation" ADD CONSTRAINT "Organisation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganisationInviteCodes" ADD CONSTRAINT "OrganisationInviteCodes_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
