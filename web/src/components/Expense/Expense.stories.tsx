import Expense from './Expense'

export const generated = () => {
  return (
    <Expense
      expense={{
        name: "Bob's Burgers",
        amount: 40,
        id: 2,
      }}
      removeExpense={undefined}
    />
  )
}

export default { title: 'Components/Expense' }
