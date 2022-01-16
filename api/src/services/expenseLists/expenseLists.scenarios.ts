import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ExpenseListCreateArgs>({
  expenseList: {
    one: { data: { tab: { create: {} } } },
    two: { data: { tab: { create: {} } } },
  },
})

export type StandardScenario = typeof standard
