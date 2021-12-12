-- CreateTable
CREATE TABLE "expense" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "amount" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "expense_pkey" PRIMARY KEY ("id")
);
