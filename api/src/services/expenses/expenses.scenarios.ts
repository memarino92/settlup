import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ExpenseCreateArgs>({
  expense: {
    one: {
      data: {
        amount: 5377461.018671938,
        expenseList: { create: { tab: { create: {} } } },
      },
    },
    two: {
      data: {
        amount: 419280.54999772925,
        expenseList: { create: { tab: { create: {} } } },
      },
    },
  },
})

export type StandardScenario = typeof standard
