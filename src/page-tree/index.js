import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {toJS} from 'mobx'
import store from './store'
import './index.styl'

store.changeData(store.treeData)
// console.log(store.changeData(store.treeData))
console.info(toJS(store.treeData))
@observer 
class DemoPage extends Component {
  render() {
    return (
      <div className="demo-page">
        123
      </div> 
    )
  }
}
export default DemoPage
