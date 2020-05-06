import React, {Component} from 'react'
import {observer} from 'mobx-react'
import store from './store'
import './index.styl'

@observer 
class DemoPage extends Component {
  constructor(props) {
    super(props)
    this.store = new store()
  }
  render() {
    return (
      <div className="demo-page">
        page
      </div> 
    )
  }
}
export default DemoPage
