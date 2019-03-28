import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {LocaleProvider} from 'antd'
import {BrowserRouter as Router} from 'react-router-dom'
import zhCN from 'antd/lib/locale-provider/zh_CN'
// import appLocaleDataZh from 'react-intl/locale-data/zh'
import 'moment/locale/zh-cn'

import './index.css'
import './common/common.styl'
import Frame from './frame'

import * as serviceWorker from './serviceWorker'

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <Router>
          <Frame />
        </Router>        
      </LocaleProvider>
    )
  }
}
export default App

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
