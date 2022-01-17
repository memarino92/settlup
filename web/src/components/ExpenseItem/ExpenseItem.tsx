import { useMutation } from '@redwoodjs/web'
import { QUERY } from 'src/components/ExpenseItemsCell'

const DELETE_EXPENSE_MUTATION = gql`
  mutation DeleteExpenseMutation($id: String!) {
    deleteExpense(id: $id) {
      id
    }
  }
`
const LOCALE_CONFIG = [
  'en-US',
  {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  },
]

const ExpenseItem = ({ expense, expenseListId }) => {
  const [deleteExpense] = useMutation(DELETE_EXPENSE_MUTATION, {
    refetchQueries: [{ query: QUERY, variables: { expenseListId } }],
    awaitRefetchQueries: true,
  })
  const onDeleteClick = (id) => {
    deleteExpense({ variables: { id } })
  }
  return (
    <div className="mt-1 flex flex-row justify-between relative bg-gray-200 p-2 rounded-lg max-w-md">
      <p>
        {expense.name} - ${expense.amount.toLocaleString(...LOCALE_CONFIG)}
      </p>
      <button onClick={() => onDeleteClick(expense.id)}>Remove</button>
    </div>
  )
}

export default ExpenseItem
