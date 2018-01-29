import gql from 'graphql-tag'

module.exports = gql`
  query getMarketExchangeQuery($market: String!, $currency: String){
    getMarketExchange(
      market: $market,
      currency: $currency
    ){
      id
      exchange
      pair
      price {
        price
      }
      base {
        symbol
        name
      }
      quote {
        symbol
        name
      }
    }
  }
`
