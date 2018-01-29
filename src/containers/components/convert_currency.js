import React from 'react'
import {graphql, compose} from 'react-apollo'
import GqlQueryAllExchanges from './../../graphql/queries/allExchanges'
import GqlQueryAllAssetsIsFiat from './../../graphql/queries/allAssets'
import GqlQueryGetMarketExchange from './../../graphql/queries/getMarketExchange'

class ConvertCurrency extends React.Component {

  state = {
    market: 'kraken',
    currency: 'usd'
  }

  onChangeHandle = (type, e) => (async () => {
    const value = e.target.value
    if (value) {
      let market, currency
      if (type == 'market') {
        market = value
      } else {
        currency = value
      }
      try {
        const { GqlQueryGetMarketExchange  } = this.props
        const response = await GqlQueryGetMarketExchange.refetch({
          market, currency
        })
        this.setState({
          market, currency
        })
      } catch (e) {

      }
    }
  })()

  render() {
    const { GqlQueryAllExchanges, GqlQueryAllAssetsIsFiat, GqlQueryAllAssetsNoneFiat, GqlQueryGetMarketExchange } = this.props
    if (
      (GqlQueryGetMarketExchange && GqlQueryGetMarketExchange.error) ||
      (GqlQueryGetMarketExchange && GqlQueryGetMarketExchange.loading)
    ) {
      return <div></div>
    }

    const { exchanges } = GqlQueryAllExchanges
    const { assets: fiatAssets } = GqlQueryAllAssetsIsFiat
    const {getMarketExchange} = GqlQueryGetMarketExchange

    return (
      <div className="grid">
        <div className="col-12">
          <table>
            <tbody>
                <tr>
                  <td>
                    Exchange&nbsp;
                    <select className="button-large" value={this.state.market} onChange={this.onChangeHandle.bind(this, 'market')}>
                      {
                        (exchanges && exchanges.length > 0) &&
                          exchanges.map((item, index) =>
                            <option key={item.symbol} value={item.symbol}>{item.name}</option>
                          )
                      }
                    </select>
                  </td>
                  <td>
                    Currency&nbsp;
                    <select className="button-large" value={this.state.currency} onChange={this.onChangeHandle.bind(this, 'currency')}>
                      {
                        (fiatAssets && fiatAssets.length > 0) &&
                          fiatAssets.map((item, index) =>
                            <option key={item.id} value={item.symbol}>{item.symbol.toUpperCase()}</option>
                          )
                      }
                    </select>
                  </td>
                </tr>
                {
                  getMarketExchange && getMarketExchange.length > 0 &&
                    getMarketExchange.map((item, index) =>
                      <tr key={item.id}>
                        <td>
                          <h3>{item.base.symbol.toUpperCase()}</h3>
                          <p>{item.base.name}</p>
                        </td>
                        <td>{`$ ${item.price.price}`}</td>
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

export default compose(
  graphql(GqlQueryAllExchanges, {
    name: 'GqlQueryAllExchanges'
  }),
  graphql(GqlQueryAllAssetsIsFiat, {
    name: 'GqlQueryAllAssetsIsFiat',
    options: () => ({
      variables: {
        fiat: true
      }
    })
  }),
  graphql(GqlQueryGetMarketExchange, {
    name: 'GqlQueryGetMarketExchange',
    options: () => ({
      variables: {
        market: 'kraken',
        currency: 'usd'
      }
    })
  }),
) (ConvertCurrency)
