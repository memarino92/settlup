import { render } from '@redwoodjs/testing/web'

import ExpenseItem from './ExpenseItem'

describe('ExpenseItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExpenseItem />)
    }).not.toThrow()
  })
})
