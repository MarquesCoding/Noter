-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ONLINE', 'OFFLINE', 'AWAY');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('MEMBER', 'ADMIN', 'RACEADMIN');

-- CreateEnum
CREATE TYPE "EventStatus" AS ENUM ('ANNOUNCED', 'CLOSED', 'ENDED', 'OPEN');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "name" TEXT,
    "surname" TEXT,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT,
    "passwordResetToken" TEXT,
    "profileImageHash" TEXT,
    "age" INTEGER,
    "address" TEXT,
    "phone" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "geoLat" DOUBLE PRECISION,
    "geoLng" DOUBLE PRECISION,
    "role" "Role" NOT NULL,
    "driving" TEXT,
    "socketId" TEXT,
    "status" "UserStatus" NOT NULL DEFAULT 'OFFLINE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "scale" TEXT,
    "manufacturer" TEXT,
    "model" TEXT,
    "radio" TEXT,
    "electrics" TEXT,
    "engine" TEXT,
    "fuel" TEXT,
    "transponderNumber" TEXT,
    "carTypeId" INTEGER NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrackSocials" (
    "id" SERIAL NOT NULL,
    "trackId" UUID NOT NULL,
    "facebook" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "youtube" TEXT NOT NULL,

    CONSTRAINT "TrackSocials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Track" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "trackIconHash" TEXT,
    "trackBannerHash" TEXT,
    "userId" UUID,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "startingDate" TIMESTAMP(3) NOT NULL,
    "closingDate" TIMESTAMP(3) NOT NULL,
    "largeEvent" BOOLEAN NOT NULL,
    "status" "EventStatus" NOT NULL,
    "resultsURL" TEXT,
    "trackId" UUID NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MemberTypes" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "trackId" UUID NOT NULL,

    CONSTRAINT "MemberTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "userId" UUID NOT NULL,
    "carId" UUID NOT NULL,
    "eventId" UUID NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" UUID NOT NULL,
    "image" TEXT NOT NULL,
    "metadata" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "edited" BOOLEAN NOT NULL,
    "trackId" UUID NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "CarType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventMemberTypes" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_CarTypeToEvent" (
    "A" INTEGER NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_CarTypeToTrack" (
    "A" INTEGER NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_passwordResetToken_key" ON "User"("passwordResetToken");

-- CreateIndex
CREATE UNIQUE INDEX "_EventMemberTypes_AB_unique" ON "_EventMemberTypes"("A", "B");

-- CreateIndex
CREATE INDEX "_EventMemberTypes_B_index" ON "_EventMemberTypes"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CarTypeToEvent_AB_unique" ON "_CarTypeToEvent"("A", "B");

-- CreateIndex
CREATE INDEX "_CarTypeToEvent_B_index" ON "_CarTypeToEvent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CarTypeToTrack_AB_unique" ON "_CarTypeToTrack"("A", "B");

-- CreateIndex
CREATE INDEX "_CarTypeToTrack_B_index" ON "_CarTypeToTrack"("B");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carTypeId_fkey" FOREIGN KEY ("carTypeId") REFERENCES "CarType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrackSocials" ADD CONSTRAINT "TrackSocials_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberTypes" ADD CONSTRAINT "MemberTypes_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventMemberTypes" ADD CONSTRAINT "_EventMemberTypes_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventMemberTypes" ADD CONSTRAINT "_EventMemberTypes_B_fkey" FOREIGN KEY ("B") REFERENCES "MemberTypes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarTypeToEvent" ADD CONSTRAINT "_CarTypeToEvent_A_fkey" FOREIGN KEY ("A") REFERENCES "CarType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarTypeToEvent" ADD CONSTRAINT "_CarTypeToEvent_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarTypeToTrack" ADD CONSTRAINT "_CarTypeToTrack_A_fkey" FOREIGN KEY ("A") REFERENCES "CarType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarTypeToTrack" ADD CONSTRAINT "_CarTypeToTrack_B_fkey" FOREIGN KEY ("B") REFERENCES "Track"("id") ON DELETE CASCADE ON UPDATE CASCADE;
