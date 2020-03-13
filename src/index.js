import React from 'react';
import ReactDOM from 'react-dom';
import {ConfigProvider} from 'antd';
import {BrowserRouter as Router} from 'react-router-dom';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import './common/common.styl';
import Frame from './frame';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
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

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();