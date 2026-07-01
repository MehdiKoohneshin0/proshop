/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "updatedAt",
ALTER COLUMN "price" SET DEFAULT 0,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(12,2),
ALTER COLUMN "rating" SET DATA TYPE DECIMAL(3,2),
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(6);

-- RenameIndex
ALTER INDEX "Product_slug_key" RENAME TO "product_slug_idx";
