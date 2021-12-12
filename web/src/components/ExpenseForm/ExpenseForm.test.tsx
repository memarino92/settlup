import { render } from '@redwoodjs/testing/web'

import ExpenseForm from './ExpenseForm'

describe('ExpenseForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExpenseForm expenseList={undefined} removeExpense={undefined} />)
    }).not.toThrow()
  })
})
