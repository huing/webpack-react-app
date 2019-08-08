import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {observable} from 'mobx'

import './index.styl'

@observer 
class DemoHome extends Component {
  @observable array = []

  @observable object = {}

  @observable num1 = undefined

  @observable num2 = null

  render() {
    return (
      <div className="demo-home">
        <div>1. 侧边栏 固定值 收缩</div>
        <div>2. 日期</div>
        <div>3. 正则表达式</div>
        <div>4. 深拷贝</div>
        <div>
          <a 
            href="https://github.com/Advanced-Frontend/Daily-Interview-Question"
            target="blank"
          >
            前端
          </a>
        </div>
        <div>useContext</div>
      </div>
    )
  }
}
export default DemoHome

const Fun1 = () => {
  console.log('Fun1')
}
const Fun2 = () => {
  console.log('Fun2')
}
function Fun() {
  const num = 1
  const flag = true
  if (flag) {
    if (num === 1) {
      Fun1()
      return
    } 
    
    Fun2()
    return
  }
  console.log('false')
}
Fun()
