import gql from 'graphql-tag'

module.exports = gql`
  query getRatesByCurrencyQuery($currency: String!) {
    rates(currency: $currency) {
      currency
      rates {
        currency
        rate
      }
    }
  }
`
