/*
  Warnings:

  - You are about to drop the column `boardId` on the `Ticket` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_boardId_fkey";

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "boardId",
ADD COLUMN     "ticketColumnId" UUID;

-- CreateTable
CREATE TABLE "TicketColumn" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "boardId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TicketColumn_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TicketColumn" ADD CONSTRAINT "TicketColumn_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_ticketColumnId_fkey" FOREIGN KEY ("ticketColumnId") REFERENCES "TicketColumn"("id") ON DELETE SET NULL ON UPDATE CASCADE;
