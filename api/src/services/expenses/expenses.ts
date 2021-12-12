import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const expenses = () => {
  return db.expense.findMany()
}

export const expense = ({ id }: Prisma.ExpenseWhereUniqueInput) => {
  return db.expense.findUnique({
    where: { id },
  })
}

interface CreateExpenseArgs {
  input: Prisma.ExpenseCreateInput
}

export const createExpense = ({ input }: CreateExpenseArgs) => {
  return db.expense.create({
    data: input,
  })
}

interface UpdateExpenseArgs extends Prisma.ExpenseWhereUniqueInput {
  input: Prisma.ExpenseUpdateInput
}

export const updateExpense = ({ id, input }: UpdateExpenseArgs) => {
  return db.expense.update({
    data: input,
    where: { id },
  })
}

export const deleteExpense = ({ id }: Prisma.ExpenseWhereUniqueInput) => {
  return db.expense.delete({
    where: { id },
  })
}
