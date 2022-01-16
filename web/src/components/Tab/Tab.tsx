import { useState } from 'react'
import ListCard from 'src/components/ListCard/ListCard'
import ResultCard from 'src/components/ResultCard/ResultCard'
import ExpenseListsCell from 'src/components/ExpenseListsCell'

const Tab = ({ tabId }) => {
  const [totalOne, setTotalOne] = useState(0)
  const [totalTwo, setTotalTwo] = useState(0)

  return (
    <>
      <div className="flex w-max justify-center">
        <ListCard
          expenseList={{ id: process.env.EXPENSE_LIST_ID_ONE }}
          total={totalOne}
          setTotal={setTotalOne}
        />
        <ListCard
          expenseList={{ id: process.env.EXPENSE_LIST_ID_TWO }}
          total={totalTwo}
          setTotal={setTotalTwo}
        />
      </div>
      <div className="flex w-max justify-center">
        <ResultCard totalOne={totalOne} totalTwo={totalTwo} />
      </div>
    </>
  )
}

export default Tab
