const ExpenseForm = ({ expenseList, removeExpense }) => {
  return (
    <div>
      {expenseList.map((expense) => {
        return (
          <Expense
            key={expense.id}
            expense={expense}
            removeExpense={removeExpense}
          />
        )
      })}
    </div>
  )
}

export default ExpenseForm
