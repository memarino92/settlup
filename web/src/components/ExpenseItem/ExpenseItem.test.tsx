import { render } from '@redwoodjs/testing/web'

import ExpenseItem from './ExpenseItem'

describe('ExpenseItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ExpenseItem expense={{ id: 1, name: 'Burgers', amount: 42.67 }} />
      )
    }).not.toThrow()
  })
})
