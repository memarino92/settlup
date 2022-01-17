import { useEffect } from 'react'
import type { ExpenseItemsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import ExpenseItem from 'src/components/ExpenseItem'

export const QUERY = gql`
  query ExpenseItemsQuery($expenseListId: String!) {
    expenses(expenseListId: $expenseListId) {
      id
      name
      amount
      createdAt
    }
  }
`
type ExpenseItemsCell = CellSuccessProps<ExpenseItemsQuery> & {
  setTotal: (total: number) => void
  expenseListId: string
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  expenses,
  setTotal,
  expenseListId,
}: ExpenseItemsCell) => {
  useEffect(() => {
    setTotal(expenses.reduce((a, b) => a + b.amount, 0))
  }, [expenses, setTotal])
  return (
    <div>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            expenseListId={expenseListId}
          />
        )
      })}
    </div>
  )
}
