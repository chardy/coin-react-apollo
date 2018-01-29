import React from 'react'
import {graphql, compose} from 'react-apollo'
import GqlQueryCurrencies from './../../graphql/queries/allCurrencies'
import GqlQueryGetRatesByCurrency from './../../graphql/queries/getRatesByCurrency'

const queryString = require('query-string')

class Conversion extends React.Component {

  state = {
    selected: selected
  }

  handleChangeCurrency = (e) => (async () => {
    const value = e.target.value
    if (value) {
      try {
        const { GqlQueryGetRatesByCurrency  } = this.props
        const response = GqlQueryGetRatesByCurrency.refetch({currency: value})
        this.setState({selected: value}, () => {
          window.history.pushState( null, null, `/?currency=${this.state.selected.toLowerCase()}` )
        })
      } catch (e) {

      }
    }
  })()


  render() {
    const { GqlQueryCurrencies, GqlQueryGetRatesByCurrency  } = this.props
    if (
      (GqlQueryCurrencies && GqlQueryCurrencies.loading) ||
      (GqlQueryCurrencies && GqlQueryCurrencies. error) ||
      (GqlQueryGetRatesByCurrency && GqlQueryGetRatesByCurrency.loading) ||
      (GqlQueryGetRatesByCurrency && GqlQueryGetRatesByCurrency.loading) ) {
      return <div>Loading</div>
    }
    const { currencies } = GqlQueryCurrencies
    const { rates } = GqlQueryGetRatesByCurrency
    return (
      <div className="grid">
        <div className="col-12">
          <span>Currency</span>
          <div className="conversion-list">
            <select className="button-large" onChange={this.handleChangeCurrency} value={this.state.selected.toUpperCase()}>
              {
                currencies.map((currency, index) =>
                  <option key={currency.id} value={currency.id}>{currency.id}</option>
                )
              }
            </select>
          </div>
        </div>
        <div className="col-12">
          <table className="full-width">
            <thead>
              <tr>
                <th>Currency</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              {
                rates.rates.map((item, index) =>
                  <tr key={item.currency} className={
                      (item.currency == "USD" || item.currency == "BTC") ? 'bold' : ''
                    }>
                    <td data-label="Currency">{item.currency}</td>
                    <td data-label="Rate">{item.rate}</td>
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

let selected = "USD"

export default compose(
  graphql(GqlQueryCurrencies, {
    name: 'GqlQueryCurrencies'
  }),
  graphql(GqlQueryGetRatesByCurrency, {
    name: 'GqlQueryGetRatesByCurrency',
    options: ({route}) => {
      let query = queryString.parse(route.location.search)
      selected = query.currency || selected
      return {
        variables: {
          currency: selected
        }
      }
    }
  })
) (Conversion)
