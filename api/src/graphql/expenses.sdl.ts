export const schema = gql`
  type Expense {
    id: String!
    name: String
    amount: Float!
    createdAt: DateTime!
  }

  type Query {
    expenses: [Expense!]! @requireAuth
    expense(id: String!): Expense @requireAuth
  }

  input CreateExpenseInput {
    name: String
    amount: Float!
  }

  input UpdateExpenseInput {
    name: String
    amount: Float
  }

  type Mutation {
    createExpense(input: CreateExpenseInput!): Expense! @requireAuth
    updateExpense(id: String!, input: UpdateExpenseInput!): Expense!
      @requireAuth
    deleteExpense(id: String!): Expense! @requireAuth
  }
`
