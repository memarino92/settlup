import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.expenseCreateArgs>({
  expense: {
    one: { data: { amount: 2732880.2588968882 } },
    two: { data: { amount: 6585982.821272302 } },
  },
})

export type StandardScenario = typeof standard
