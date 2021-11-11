import ExpenseCell from 'src/components/Expense/ExpenseCell'

type ExpensePageProps = {
  id: String
}

const ExpensePage = ({ id }: ExpensePageProps) => {
  return <ExpenseCell id={id} />
}

export default ExpensePage
