import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ExpenseForm from 'src/components/Expense/ExpenseForm'

const CREATE_EXPENSE_MUTATION = gql`
  mutation CreateExpenseMutation($input: CreateExpenseInput!) {
    createExpense(input: $input) {
      id
    }
  }
`

const NewExpense = () => {
  const [createExpense, { loading, error }] = useMutation(
    CREATE_EXPENSE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Expense created')
        navigate(routes.expenses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    input.amount = +input.amount
    createExpense({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Expense</h2>
      </header>
      <div className="rw-segment-main">
        <ExpenseForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewExpense
