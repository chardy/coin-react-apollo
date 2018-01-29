import gql from 'graphql-tag'

module.exports = gql`
  query allStatsQuery{
    stats(start: 0, limit: 10) {
      id
  		name
  		symbol
  		rank
  		priceUsd
  		priceBtc
  		marketCapUsd
  		availableSupply
  		totalSupply
  		maxSupply
  		percentChange1h
  		percentChange24h
  		percentChange7d
  		lastUpdated
    }
  }
`
