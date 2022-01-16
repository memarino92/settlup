export const schema = gql`
  type ExpenseList {
    id: String!
    createdAt: DateTime!
    expenses: [Expense]!
    tab: Tab!
    tabId: String!
    name: String
  }

  type Query {
    expenseLists: [ExpenseList!]! @requireAuth
  }

  input CreateExpenseListInput {
    tabId: String!
    name: String
  }

  input UpdateExpenseListInput {
    tabId: String
    name: String
  }
`
