import { graphql } from '../src/gql'

export const REQUEST = graphql(/* GraphQL */ `
  query Test {
    repository(name: "test", owner: "test") {
      id
      name
      owner {
        login
      }
    }
  }
`)
