import { useState } from 'react'
import ListCard from 'src/components/ListCard/ListCard'
import ResultCard from 'src/components/ResultCard/ResultCard'

const Tab = () => {
  const [totalOne, setTotalOne] = useState(0)
  const [totalTwo, setTotalTwo] = useState(0)

  return (
    <>
      <div className="flex w-max justify-center">
        <ListCard
          expenseList={{ id: 'ckygp7rry0009vmtavpwh4rsf' }}
          total={totalOne}
          setTotal={setTotalOne}
        />
        <ListCard
          expenseList={{ id: 'ckygp8fs50016vmtahi7fwsxj' }}
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
