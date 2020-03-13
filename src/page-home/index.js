import React from 'react'
import {observer} from 'mobx-react'
import store from './store'
import Hooks from './Hooks'
// import HooksTwo from './HooksTwo'
import Action from '../Action'
import './index.styl'

@observer 
class DemoHome extends React.Component {
  componentDidMount() {
    // store.Hello()
    // store.getHomeValue()
    store.changeData()
  }

  render() {
    const {value, changeTab, tab} = store
    return (
      <div className="demo-home">
        <div>1. 侧边栏 固定值 收缩</div>
        <div>2. 日期</div>
        <div>3. 正则表达式</div>
        <div>4. 深拷贝</div>
        <div>useContext</div>
        <div>{value}1111111111111dddd</div>
        <Hooks />
        {/* <HooksTwo /> */}
        <Action active={tab} onChange={changeTab}>
          <Action.Item value="">全部</Action.Item>
          {[1,2,3,4,5,6].map(item => (
            <Action.Item value={item} key={item}>{item}</Action.Item>
          ))}
        </Action>
      </div>
    )
  }
}
export default DemoHome
