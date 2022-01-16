/*
  Warnings:

  - You are about to drop the `expense` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "expense";

-- CreateTable
CREATE TABLE "Expense" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "amount" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expenseListId" TEXT NOT NULL,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tab" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExpenseList" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tabId" TEXT NOT NULL,

    CONSTRAINT "ExpenseList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_expenseListId_fkey" FOREIGN KEY ("expenseListId") REFERENCES "ExpenseList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpenseList" ADD CONSTRAINT "ExpenseList_tabId_fkey" FOREIGN KEY ("tabId") REFERENCES "Tab"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
