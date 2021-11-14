import ExpenseItem from './ExpenseItem'

export const generated = () => {
  return (
    <ExpenseItem
      expense={{
        __typename: 'Expense',
        id: 'ckvueaz1n0002gsta8pe13mk9',
        name: 'Groceries',
        amount: 80,
        createdAt: '2021-11-11T03:32:26.219Z',
      }}
      removeExpense={() => {}}
    />
  )
}

export default { title: 'Components/ExpenseItem' }
