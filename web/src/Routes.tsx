// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import ExpensesLayout from 'src/layouts/ExpensesLayout'
import AppLayout from './layouts/AppLayout/AppLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ExpensesLayout}>
        <Route path="/expenses/new" page={ExpenseNewExpensePage} name="newExpense" />
        <Route path="/expenses/{id}/edit" page={ExpenseEditExpensePage} name="editExpense" />
        <Route path="/expenses/{id}" page={ExpenseExpensePage} name="expense" />
        <Route path="/expenses" page={ExpenseExpensesPage} name="expenses" />
      </Set>
      <Set wrap={AppLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
