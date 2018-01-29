import React from 'react'

import Conversion from './components/conversion'
import Stats from './components/stat'

class Index extends React.Component {

  state = {
    checked: 1
  }

  changeTabHandle = (e) => (async () => {
    if (e) {
      this.setState({checked: e}, () => {
      })
    }
  })()

  render() {
    const { checked } = this.state
    return (
      <div className="index-page">
        <h2>CoinQL</h2>
        <div className="tabs">
          <div className="tab">
            <input className="tab-radio" type="radio" id="tab-1" name="tab-group-1" onChange={this.changeTabHandle.bind(this, 1)} checked={checked == 1 ? true : false} />
            <label className="tab-label" htmlFor="tab-1">All Conversion</label>
            <div className="tab-panel">
              <div className="tab-content">
                <Conversion route={this.props.route} />
              </div>
            </div>
          </div>

          <div className="tab">
            <input className="tab-radio" type="radio" id="tab-2" name="tab-group-2" onChange={this.changeTabHandle.bind(this, 2)} checked={checked == 2 ? true : false} />
            <label className="tab-label" htmlFor="tab-2">Stats</label>
            <div className="tab-panel">
              <div className="tab-content">
                <Stats />
              </div>
            </div>
          </div>

          <div className="tab">
            <input className="tab-radio" type="radio" id="tab-3" name="tab-group-3" onChange={this.changeTabHandle.bind(this, 3)} checked={checked == 3 ? true : false} />
            <label className="tab-label" htmlFor="tab-3">Convert Currency</label>
            <div className="tab-panel">
              <div className="tab-content">
                <h3>Why would this be cool?</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
