import type { EditExpenseById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import ExpenseForm from 'src/components/Expense/ExpenseForm'

export const QUERY = gql`
  query EditExpenseById($id: String!) {
    expense: expense(id: $id) {
      id
      name
      amount
      createdAt
      expenseListId
    }
  }
`
const UPDATE_EXPENSE_MUTATION = gql`
  mutation UpdateExpenseMutation($id: String!, $input: UpdateExpenseInput!) {
    updateExpense(id: $id, input: $input) {
      id
      name
      amount
      createdAt
      expenseListId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ expense }: CellSuccessProps<EditExpenseById>) => {
  const [updateExpense, { loading, error }] = useMutation(UPDATE_EXPENSE_MUTATION, {
    onCompleted: () => {
      toast.success('Expense updated')
      navigate(routes.expenses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateExpense({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Expense {expense.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ExpenseForm expense={expense} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
