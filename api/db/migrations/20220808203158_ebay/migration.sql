/*
  Warnings:

  - You are about to drop the `UserExample` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Amazon" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "UserExample";

-- CreateTable
CREATE TABLE "Ebay" (
    "id" INTEGER NOT NULL,
    "contributor" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ebay_pkey" PRIMARY KEY ("id")
);
