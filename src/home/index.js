import React, {Component} from 'react'
import {observer} from 'mobx-react'
import './index.styl'

@observer 
class DemoHome extends Component {
  render() {
    return (
      <div className="demo-home">
        干啥！
      </div>
    )
  }
}
export default DemoHome