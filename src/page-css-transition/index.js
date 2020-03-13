import React, {Component} from 'react'
import {observer} from 'mobx-react'
import './index.styl'

@observer 
class DemoPage extends Component {
  render() {
    return (
      <div className="demo-page">
        <div className="box" />
      </div> 
    )
  }
}
export default DemoPage
