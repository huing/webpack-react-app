import React from 'react'
import {observer} from 'mobx-react'
import store from './store'
import './index.styl'

@observer 
class DemoHome extends React.Component {
  componentDidMount() {
    store.getHomeValue()
  }

  render() {
    const {value} = store
    return (
      <div className="demo-home">
        <div>1. 侧边栏 固定值 收缩</div>
        <div>2. 日期</div>
        <div>3. 正则表达式</div>
        <div>4. 深拷贝</div>
        <div>useContext</div>

        <div>{value}</div>
      </div>
    )
  }
}
export default DemoHome
