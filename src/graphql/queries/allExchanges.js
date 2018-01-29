import gql from 'graphql-tag'

module.exports = gql`
  query allExchangesQuery{
    exchanges {
      name
      symbol
    }
  }
`
