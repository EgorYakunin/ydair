/*
  Warnings:

  - You are about to drop the column `arrival_code_id` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `depature_code_id` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the `Airport` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `arrival_city` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `arrival_code` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departure_city` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departure_code` to the `Flight` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Flight" DROP CONSTRAINT "Flight_arrival_code_id_fkey";

-- DropForeignKey
ALTER TABLE "Flight" DROP CONSTRAINT "Flight_depature_code_id_fkey";

-- AlterTable
ALTER TABLE "Flight" DROP COLUMN "arrival_code_id",
DROP COLUMN "depature_code_id",
ADD COLUMN     "arrival_city" TEXT NOT NULL,
ADD COLUMN     "arrival_code" TEXT NOT NULL,
ADD COLUMN     "departure_city" TEXT NOT NULL,
ADD COLUMN     "departure_code" TEXT NOT NULL;

-- DropTable
DROP TABLE "Airport";
