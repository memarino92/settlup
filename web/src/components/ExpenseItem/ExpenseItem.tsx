const ExpenseItem = ({ expense }) => {
  return (
    <div className="mt-1 flex flex-row justify-between relative bg-gray-200 p-2 rounded-lg max-w-md">
      <p>
        {expense.name} - $
        {expense.amount.toLocaleString('en-US', {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })}
      </p>
      <button onClick={() => {}}>Remove</button>
    </div>
  )
}

export default ExpenseItem
