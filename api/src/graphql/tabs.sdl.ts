export const schema = gql`
  type Tab {
    id: String!
    createdAt: DateTime!
    name: String
    expenseLists: [ExpenseList]!
  }

  type Query {
    tabs: [Tab!]! @requireAuth
  }

  input CreateTabInput {
    name: String
  }

  input UpdateTabInput {
    name: String
  }
`
