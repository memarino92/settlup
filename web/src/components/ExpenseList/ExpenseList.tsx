import ExpenseItem from '../ExpenseItem/ExpenseItem'

const ExpenseList = ({ expenseList, removeExpense }) => {
  return (
    <div>
      {expenseList.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            removeExpense={removeExpense}
          />
        )
      })}
    </div>
  )
}

export default ExpenseList
