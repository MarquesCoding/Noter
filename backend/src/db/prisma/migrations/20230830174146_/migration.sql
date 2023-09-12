/*
  Warnings:

  - You are about to drop the column `driving` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Booking` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Car` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CarType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MemberTypes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Track` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TrackSocials` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserSocketConnection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CarTypeToEvent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CarTypeToTrack` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EventMemberTypes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `roleId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_carId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_userId_fkey";

-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_carTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_userId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_trackId_fkey";

-- DropForeignKey
ALTER TABLE "MemberTypes" DROP CONSTRAINT "MemberTypes_trackId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_trackId_fkey";

-- DropForeignKey
ALTER TABLE "Track" DROP CONSTRAINT "Track_userId_fkey";

-- DropForeignKey
ALTER TABLE "TrackSocials" DROP CONSTRAINT "TrackSocials_trackId_fkey";

-- DropForeignKey
ALTER TABLE "UserSocketConnection" DROP CONSTRAINT "UserSocketConnection_userId_fkey";

-- DropForeignKey
ALTER TABLE "_CarTypeToEvent" DROP CONSTRAINT "_CarTypeToEvent_A_fkey";

-- DropForeignKey
ALTER TABLE "_CarTypeToEvent" DROP CONSTRAINT "_CarTypeToEvent_B_fkey";

-- DropForeignKey
ALTER TABLE "_CarTypeToTrack" DROP CONSTRAINT "_CarTypeToTrack_A_fkey";

-- DropForeignKey
ALTER TABLE "_CarTypeToTrack" DROP CONSTRAINT "_CarTypeToTrack_B_fkey";

-- DropForeignKey
ALTER TABLE "_EventMemberTypes" DROP CONSTRAINT "_EventMemberTypes_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventMemberTypes" DROP CONSTRAINT "_EventMemberTypes_B_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "driving",
DROP COLUMN "role",
DROP COLUMN "status",
ADD COLUMN     "roleId" UUID NOT NULL;

-- DropTable
DROP TABLE "Booking";

-- DropTable
DROP TABLE "Car";

-- DropTable
DROP TABLE "CarType";

-- DropTable
DROP TABLE "Event";

-- DropTable
DROP TABLE "MemberTypes";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Track";

-- DropTable
DROP TABLE "TrackSocials";

-- DropTable
DROP TABLE "UserSocketConnection";

-- DropTable
DROP TABLE "_CarTypeToEvent";

-- DropTable
DROP TABLE "_CarTypeToTrack";

-- DropTable
DROP TABLE "_EventMemberTypes";

-- DropEnum
DROP TYPE "EventStatus";

-- DropEnum
DROP TYPE "Role";

-- DropEnum
DROP TYPE "UserStatus";

-- CreateTable
CREATE TABLE "Role" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
