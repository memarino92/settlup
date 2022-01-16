import type { FindExpenses } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Expenses from 'src/components/Expense/Expenses'

export const QUERY = gql`
  query FindExpenses($expenseListId: String!) {
    expenses(expenseListId: $expenseListId) {
      id
      name
      amount
      createdAt
      expenseListId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No expenses yet. '}
      <Link to={routes.newExpense()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ expenses }: CellSuccessProps<FindExpenses>) => {
  return <Expenses expenses={expenses} />
}
