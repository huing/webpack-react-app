import React, {Component} from 'react'
import {observer} from 'mobx-react'
import store from './store'
import './index.styl'

@observer 
class DemoPage extends Component {
  render() {
    return (
      <div className="demo-page">
        page
      </div> 
    )
  }
}
export default DemoPage
