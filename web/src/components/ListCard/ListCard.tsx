import { useState } from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import ExpenseItemsCell from '../ExpenseItemsCell'

const ListCard = () => {
  const [total, setTotal] = useState(0)

  return (
    <div className="bg-white shadow-md rounded px-2 p-2 m-4 max-w-md">
      <ExpenseForm />
      <ExpenseItemsCell setTotal={setTotal} />
      <div>
        <h2>
          Total: $
          {total.toLocaleString('en-US', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </h2>
      </div>
    </div>
  )
}

export default ListCard
