import ExpenseForm from '../ExpenseForm/ExpenseForm'
import ExpenseItemsCell from '../ExpenseItemsCell'

const ListCard = () => {
  return (
    <div className="bg-white shadow-md rounded px-2 p-2 mb-4 max-w-md">
      <ExpenseForm />
      <ExpenseItemsCell />
    </div>
  )
}

export default ListCard
