const Expense = ({ expense, removeExpense }) => {
  return (
    <div className="mt-2 flex flex-row justify-between relative bg-gray-200 p-4 rounded-lg max-w-md">
      <p>
        {expense.name} - ${expense.amount}
      </p>
      <button onClick={removeExpense(expense.id)}>Remove</button>
    </div>
  )
}

export default Expense
