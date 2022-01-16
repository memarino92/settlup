import {
  expenses,
  expense,
  createExpense,
  updateExpense,
  deleteExpense,
} from './expenses'
import type { StandardScenario } from './expenses.scenarios'

describe('expenses', () => {
  scenario('returns all expenses', async (scenario: StandardScenario) => {
    const result = await expenses()

    expect(result.length).toEqual(Object.keys(scenario.expense).length)
  })

  scenario('returns a single expense', async (scenario: StandardScenario) => {
    const result = await expense({ id: scenario.expense.one.id })

    expect(result).toEqual(scenario.expense.one)
  })

  scenario('creates a expense', async (scenario: StandardScenario) => {
    const result = await createExpense({
      input: {
        amount: 8732215.008296356,
        expenseListId: scenario.expense.two.expenseListId,
      },
    })

    expect(result.amount).toEqual(8732215.008296356)
    expect(result.expenseListId).toEqual(scenario.expense.two.expenseListId)
  })

  scenario('updates a expense', async (scenario: StandardScenario) => {
    const original = await expense({ id: scenario.expense.one.id })
    const result = await updateExpense({
      id: original.id,
      input: { amount: 8224678.362329041 },
    })

    expect(result.amount).toEqual(8224678.362329041)
  })

  scenario('deletes a expense', async (scenario: StandardScenario) => {
    const original = await deleteExpense({ id: scenario.expense.one.id })
    const result = await expense({ id: original.id })

    expect(result).toEqual(null)
  })
})
