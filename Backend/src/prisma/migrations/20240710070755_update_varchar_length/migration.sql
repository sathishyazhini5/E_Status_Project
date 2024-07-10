/*
  Warnings:

  - The primary key for the `quickcode_mst` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "quickcode_mst" DROP CONSTRAINT "quickcode_mst_pkey",
ALTER COLUMN "quick_code_type" SET DATA TYPE VARCHAR(50),
ADD CONSTRAINT "quickcode_mst_pkey" PRIMARY KEY ("quick_code_type", "quick_code", "language_code");
