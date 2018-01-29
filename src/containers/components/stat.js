import React from 'react'
import {apolloFetch} from './../../connectors/apollo'
import GqlQueryAllStats from './../../graphql/queries/allStats'
import {formatCount} from './format'
import moment from 'moment'

class Stat extends React.Component {

  state = {
    stats: [],
    loading: false
  }

  componentDidMount() {
    this.dataLoad()
  }

  dataLoad = () => (async () => {
    try {
      const response = await apolloFetch({ query: GqlQueryAllStats })
      if (response) {
        const {data:{stats}} = response
        this.setState({stats, loading: false})
      }
    } catch (e) {

    }
  })()

  refeshHandle = (e) => (async () => {
    e.preventDefault()
    this.setState({loading: true}, () => {
      this.dataLoad()
    })
  })()

  render() {
    const {stats, loading} = this.state
    if (stats && stats.length <= 0) {
      return <div></div>
    }
    return (
      <div className="grid">
        <div className="col-12">
          <button className={`button-success button ${loading && 'loading'}`} onClick={this.refeshHandle}>Refresh</button>
        </div>
        <div className="col-12">
          <h4 className="title">Data source from <a href="https://coinmarketcap.com/api/">api.coinmarketcap.com</a> at {moment.unix(stats[0].lastUpdated).format("HH:mm:ss")}</h4>
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
        </div>
      </div>
    )
  }
}

export default Stat
