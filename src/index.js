import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "moment/locale/zh-cn";
import "./common";
import Frame from "./frame";
import Login from "./user-login";

// 测试github提交

class App extends React.Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Router>
          <Switch>
            <Route path="/" component={Frame} />
            <Route exact path="/login" component={Login} />
            <Redirect exact from="/" to="/login" />
          </Switch>
        </Router>
      </ConfigProvider>
    );
  }
}
export default App;

ReactDOM.render(<App />, document.getElementById("root"));
