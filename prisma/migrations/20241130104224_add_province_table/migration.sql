/*
  Warnings:

  - You are about to drop the column `province_name` on the `Cities` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cities" DROP COLUMN "province_name";

-- CreateTable
CREATE TABLE "Provinces" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Provinces_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cities" ADD CONSTRAINT "Cities_province_id_fkey" FOREIGN KEY ("province_id") REFERENCES "Provinces"("id") ON DELETE CASCADE ON UPDATE CASCADE;
