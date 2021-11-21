import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ExpenseItemsCell'

const DELETE_EXPENSE_MUTATION = gql`
  mutation DeleteExpenseMutation($id: String!) {
    deleteExpense(id: $id) {
      id
    }
  }
`

const ExpenseItem = ({ expense }) => {
  const [deleteExpense] = useMutation(DELETE_EXPENSE_MUTATION, {
    onCompleted: () => {
      toast.success('Expense deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })
  const onDeleteClick = (id) => {
    deleteExpense({ variables: { id } })
  }
  return (
    <div className="mt-1 flex flex-row justify-between relative bg-gray-200 p-2 rounded-lg max-w-md">
      <p>
        {expense.name} - $
        {expense.amount.toLocaleString('en-US', {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })}
      </p>
      <button onClick={() => onDeleteClick(expense.id)}>Remove</button>
    </div>
  )
}

export default ExpenseItem
