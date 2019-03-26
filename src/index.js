import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
import {LocaleProvider} from 'antd'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  // withRouter,
} from 'react-router-dom'

import zhCN from 'antd/lib/locale-provider/zh_CN'
// import appLocaleDataZh from 'react-intl/locale-data/zh'

import 'moment/locale/zh-cn'

import './index.css'
import './common/common.styl'

import UserLayout from './user-layout'
import BaseLayout from './base-layout'

import store from './store'
import router from './router'

import * as serviceWorker from './serviceWorker'


class App extends Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <Provider store={store}>
          <Router value={router}>
            <Switch>
              <Route component={UserLayout} path="/user" />                
              <Route component={BaseLayout} path="/tab" />
              <Redirect from="/" to="/user" />
            </Switch>
          </Router>
        </Provider>
      </LocaleProvider>
    )
  }
}
export default App


ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
