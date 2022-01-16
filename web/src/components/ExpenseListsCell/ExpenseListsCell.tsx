import type { ExpenseListsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import ListCard from '../ListCard/ListCard'

export const QUERY = gql`
  query ExpenseListsQuery {
    expenseLists {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  expenseLists,
}: CellSuccessProps<ExpenseListsQuery>) => {
  return (
    <ul>
      {expenseLists.map((expenseList) => {
        return <ListCard key={expenseList.id} expenseList={expenseList} />
      })}
    </ul>
  )
}
