import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {ConfigProvider} from 'antd'
import {BrowserRouter as Router} from 'react-router-dom'
import zhCN from 'antd/es/locale/zh_CN'
import 'moment/locale/zh-cn'
import './common/common.styl'
import Frame from './frame'

class App extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Router>
          <Frame />
        </Router>
      </ConfigProvider>
    )
  }
}
export default App

ReactDOM.render(<App />, document.getElementById('root'))
