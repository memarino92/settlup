import ExpenseList from './ExpenseList'

export const generated = () => {
  return (
    <ExpenseList
      expenseList={[
        {
          name: "Bob's Burgers",
          amount: 40,
          id: 2,
        },
        {
          name: 'Groceries',
          amount: 90,
          id: 2,
        },
      ]}
      removeExpense={() => {}}
    />
  )
}

export default { title: 'Components/ExpenseList' }
