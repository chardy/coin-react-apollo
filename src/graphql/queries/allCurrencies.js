import gql from 'graphql-tag'
import CurrenciesFragment from './../fragments/currency'

module.exports = gql`
  query allCurrenciesQuery{
    currencies {
      ...CurrenciesFragment
    }
  }
  ${CurrenciesFragment}
`
