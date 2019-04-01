import React, {Component} from 'react'
import {observer} from 'mobx-react'
import './index.styl'
import {formatMessage} from '../locales'
// import {formatMessage} from 'react-intl'

@observer 
class DemoHome extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="demo-home">
        干啥！
        <div>
          {formatMessage({id: 'hhh'})}
        </div>
      </div>
    )
  }
}
export default DemoHome