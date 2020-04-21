import React from 'react';
import ReactDOM from 'react-dom';
import {ConfigProvider} from 'antd';
import {Provider} from 'mobx-react'
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './common/common.styl';
import Frame from './frame';
import Login from './user-login';
import store from './store';
import * as serviceWorker from './serviceWorker';

// @withRouter
class App extends React.Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Provider {...store}>
          <Router>
            <Switch>
              <Route path='/operation' component={Frame} />
              <Route exact path='/login' component={Login} />
              <Redirect exact from='/' to='/login' />
            </Switch>
          </Router>
        </Provider>          
      </ConfigProvider>
    )
  }
}
export default App

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();