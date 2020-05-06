import React, {Component} from 'react'
import {observer} from 'mobx-react'
import Store from './store'
import './index.styl'

@observer 
class DemoPage extends Component {
  constructor(props) {
    super(props)
    this.store = new Store()
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
