import type { FindExpenseById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Expense from 'src/components/Expense/Expense'

export const QUERY = gql`
  query FindExpenseById($id: String!) {
    expense: expense(id: $id) {
      id
      name
      amount
      createdAt
      expenseListId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Expense not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ expense }: CellSuccessProps<FindExpenseById>) => {
  return <Expense expense={expense} />
}
