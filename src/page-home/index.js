import React, {Component} from 'react'
import {observer} from 'mobx-react'

import './index.styl'

@observer 
class DemoHome extends Component {
  render() {
    return (
      <div className="demo-home">
        1. 侧边栏 固定值 收缩
      </div>
    )
  }
}
export default DemoHome




