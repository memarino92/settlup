import ExpenseItemsCell from 'src/components/ExpenseItemsCell'
import { useFlag } from '@unleash/proxy-client-react'

const HomePage = () => {
  if (useFlag('UnderConstruction')) {
    return <h1>Under Construction</h1>
  }
  return (
    <>
      <ExpenseItemsCell />
    </>
  )
}

export default HomePage
