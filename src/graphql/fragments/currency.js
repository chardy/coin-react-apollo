import gql from 'graphql-tag'

module.exports = gql`
  fragment CurrenciesFragment on Currency {
    id
    name
    min_size
  }
`
