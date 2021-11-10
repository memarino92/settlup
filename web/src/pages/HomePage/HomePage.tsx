import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ExpenseList from 'src/components/ExpenseList/ExpenseList'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <header className="relative flex justify-between items-center py-4 px-8 bg-blue-700 text-white">
        <h1 className="text-5xl font-semibold tracking-tight">
          <Link
            className="text-blue-400 hover:text-blue-100 transition duration-100"
            to={routes.home()}
          >
            Split the Diff
          </Link>
        </h1>
      </header>
      <ExpenseList
        expenseList={[
          {
            name: "Bob's Burgers",
            amount: 40,
            id: 2,
          },
          {
            name: 'Groceries',
            amount: 90,
            id: 2,
          },
        ]}
        removeExpense={() => {}}
      />
    </>
  )
}

export default HomePage
