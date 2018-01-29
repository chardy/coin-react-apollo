import gql from 'graphql-tag'

module.exports = gql`
  query allAssetsQuery($fiat: Boolean = true){
    assets (
      fiat: $fiat
    ) {
      id
      name
      symbol
      fiat
    }
  }
`
