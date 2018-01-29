import React from 'react'

import Conversion from './components/conversion'
import Stats from './components/stat'
import ConvertCurrency from './components/convert_currency'

class Index extends React.Component {

  state = {
    checked: 1
  }

  changeTabHandle = (e) => (async () => {
    if (e) {
      this.setState({checked: e}, () => {
        window.history.pushState( null, null, `/` )
      })
    }
  })()

  render() {
    const { checked } = this.state
    return (
      <div className="index-page">
        <h2><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQVSURBVGhD7ZjNbxVVGMYn2t5SUhVQFwKycUHiWj5M3OvKjZ+RhR87wx9QYYuWhp2QAIGgC3dCTYiJG0165xbrR5TYUgGbaChoaqgQjGiri/PyvNd3wsz0OeeeuR9lc5/kl3sz9znveWbmzJlzT9JXX311Lvk4ud9NDu929dp+lw5NuPrQj+Am+M/Q73PgjEtr+1xjeJdIcp81v3dy6brHJR0aR/Df8ClVwIlcwwkdxIlvtXJrJ5kceQQBTiDAvyxcFbQGah3Vmla+t3L1wdfQ6Q0WphNwEkuuMfiqddN9yVxSw1A5yTrvJujjmEwmA9ZtdyTfJevxcH7GOuwFuMOfap/WfWdqXvk1DJ+BPs/q7GYx2lflYbOycJfQsQh0OFmM9uTSwT2scBAWlh2LBJPGyxanmlxj5FHMDH+wokFYWHYsEtyF6+7zBx62WPFCw+OsICUfsBVXD4mcf4bX8YAsRyxWnPQNW+klxYK2YvEDkXObeL0SeKBX3BfDWyxea6HReLlIEBYwhsVTvB4BF3TM4oWliyyM/V9ZES/lYOXfpx4U+Wa7yJUDq73fP7XaT8Awuhq1AHT1dU+zAkHKoZgnY+lM0Tv/NvcRXDqw02L6hTPdzxoHyQdSmCdjYazo/XmU+yi1dyymX3hgPuGNA+QDKcyTsTRR9F56nfsIeA5OW0y/YJpjjYPkAynl3xsjIt8+iSl0vOj7Z15keutqvwdc3AsW0y+cwE3WOEg+VDRXRC6/yet50BerxfSr0vyfQQMG+PuiyMyzvFYAzWYx/VqTE1Bu/yBy4Xlez0PsCXQ+hJhneguGzFsY9z/d9S3/gvcA/t8zPyFuCOFBYY2D5MMrzJMxv7fo/f0j7iMg26zF9AumCdY4SD6QwjwZXz9R9P51nvsIGB0R02ha28caB8kHUpgnY+qholenUuYj4CU7ajH90g0q1jhIPpDCPBkzzxW9t1LuI7j6wA6L6Zct5q6xAl7ygRTmmd6Mt+4bmH1mil5d4DF/CVx9mCN38zDWDrIiXvKBqnB7VuSrbbxmCTyb71m81tLtvkrvAxauFX9+iSl0B69XAuGX3bnhzRYvTrhlx1gxCgvoY/FDkYt78DBv4LUIyFLtL6VK/0jri4MVDJIPGzoWCcJfl6lko8WqJpcOvsKKBmFh2bFIcBFfsDjtCVcgfndCYWHZsQgw9t+3GO1LN1pR6CzroJc0++zG1qKqubmrG66ko17QDN+tzd1MzTtRZWZqE4z5w1278kxSr72ETpZY552gs41r1F60bnorN51s0rkZt3qFhakCaiw3r/pkssHKr510uw/PxhhOZoGFC6FtEP5dl65/zMrdO/2/ABzYqfs2umZHsFl83tDliKHfZ8BpBB/VVWX0wqyvvvoKKEnuAHnWIJCra20IAAAAAElFTkSuQmCC"/> CoinQL Apollo</h2>
        <div className="tabs">
          <div className="tab">
            <input className="tab-radio" type="radio" id="tab-1" name="tab-group-1" onChange={this.changeTabHandle.bind(this, 1)} checked={checked == 1 ? true : false} />
            <label className="tab-label" htmlFor="tab-1">Currency Rates</label>
            <div className="tab-panel">
              <div className="tab-content">
                <Conversion route={this.props.route} />
              </div>
            </div>
          </div>

          <div className="tab">
            <input className="tab-radio" type="radio" id="tab-2" name="tab-group-2" onChange={this.changeTabHandle.bind(this, 2)} checked={checked == 2 ? true : false} />
            <label className="tab-label" htmlFor="tab-2">Global Stats</label>
            <div className="tab-panel">
              <div className="tab-content">
                <Stats route={this.props.route} />
              </div>
            </div>
          </div>

          <div className="tab">
            <input className="tab-radio" type="radio" id="tab-3" name="tab-group-3" onChange={this.changeTabHandle.bind(this, 3)} checked={checked == 3 ? true : false} />
            <label className="tab-label" htmlFor="tab-3">Coin Markets</label>
            <div className="tab-panel">
              <div className="tab-content">
                <ConvertCurrency route={this.props.route} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
