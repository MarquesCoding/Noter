/*
  Warnings:

  - You are about to drop the `UserWebsocketConnections` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserWebsocketConnections" DROP CONSTRAINT "UserWebsocketConnections_userId_fkey";

-- DropTable
DROP TABLE "UserWebsocketConnections";
