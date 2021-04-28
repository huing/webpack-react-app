import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "moment/locale/zh-cn";
import { getFlatRoute } from "./config/util";
import { routes } from "./config/routes";
import Frame from "./frame";
import "./common";

class Index extends React.Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Router>
          <Switch>
            <Frame>
              {(getFlatRoute(routes) || []).map((item) => (
                <Route key={item.path} exact={item.exact || true} path={item.path} component={item.component} />
              ))}
            </Frame>
            <Redirect to="/login" />
            <Route render={() => <div>404</div>} />
          </Switch>
        </Router>
      </ConfigProvider>
    );
  }
}
export default Index;

ReactDOM.render(<Index />, document.getElementById("root"));
