import React from 'react'
import {apolloFetch} from './../../connectors/apollo'
import GqlQueryAllStats from './../../graphql/queries/allStats'
import {formatCount} from './format'

class Stat extends React.Component {

  state = {
    stats: []
  }

  componentDidMount() {
    apolloFetch({
      query: GqlQueryAllStats
    })
    .then(({data:{stats}}) => {
      if (stats) {
        this.setState({stats}, () => {
        })
      }
    })
  }

  render() {
    const {stats} = this.state
    return (
      <table className="full-width stat-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Coin</th>
            <th>Price (USD)</th>
            <th>Change (24H)</th>
            <th>Change (1H)</th>
            <th>Market Cap (USD)</th>
          </tr>
        </thead>
        <tbody>
          {
            stats.map((stat, index) =>
              <tr key={stat.id}>
                <td data-label="Rank">{stat.rank}</td>
                <td data-label="Coin">💰 {stat.symbol}</td>
                <td data-label="Price (USD)">{stat.priceUsd}</td>
                <td data-label="Change (24H)" className={
                    stat.percentChange24h > 0 ? 'plus' : 'minus'
                  }>
                  {stat.percentChange24h}%
                </td>
                <td data-label="Change (1H)" className={
                    stat.percentChange1h > 0 ? 'plus' : 'minus'
                  }>
                  {stat.percentChange1h}%
                </td>
                <td data-label="Market Cap (USD)">{formatCount(stat.marketCapUsd, true, 3)}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    )
  }
}

export default Stat
