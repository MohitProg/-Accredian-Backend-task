/*
  Warnings:

  - Added the required column `check` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Referral` ADD COLUMN `check` BOOLEAN NOT NULL;
