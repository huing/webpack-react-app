import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {toJS} from 'mobx'
import store from './store'
import './index.styl'

@observer 
class DemoPage extends Component {
  render() {
    console.log(toJS(store))
    return (
      <div className="demo-page">
        page
      </div> 
    )
  }
}
export default DemoPage
