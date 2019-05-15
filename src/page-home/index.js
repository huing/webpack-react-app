import React, {Component} from 'react'
import {observer} from 'mobx-react'
import './index.styl'
// import {formatMessage} from '../locales'


@observer 
class DemoHome extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="demo-home">
        干啥！
      </div>
    )
  }
}
export default DemoHome

