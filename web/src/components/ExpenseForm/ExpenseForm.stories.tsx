import ExpenseForm from './ExpenseForm'

export const generated = () => {
  return (
    <ExpenseForm
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

export default { title: 'Components/ExpenseForm' }
