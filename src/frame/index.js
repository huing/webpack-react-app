import React, { Component } from "react";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import DocumentTitle from "react-document-title";
import Cookies from "js-cookie";
import { Layout } from "antd";
import PageHeader from "./Header";
import MenuSider from "./Sider";
import store from "./store";
import "./index.less";

const { Header, Content, Sider } = Layout;

@withRouter
@observer
class Frame extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.pathname !== "/login" && !Cookies.get("LOGINDATA")) {
      history.push("/login");
    }
  }
  render() {
    if (this.props.location.pathname === "/login") {
      return this.props.children;
    }
    return (
      <DocumentTitle title="Demo">
        <Layout>
          <Sider
            theme="light"
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
            }}
          >
            <div className="logo"></div>
            <MenuSider {...this.props} store={store} />
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ position: "fixed", zIndex: 1, width: "calc(100% - 200px)", background: "#FFF", boxShadow: "0 1px 0 0 rgb(205, 205, 205)" }}>
              <PageHeader {...this.props} store={store} />
            </Header>
            <Content style={{ margin: "74px 10px 10px 10px", overflow: "auto", backgroundColor: "#fff", padding: 10 }}>{this.props.children}</Content>
          </Layout>
        </Layout>
      </DocumentTitle>
    );
  }
}

export default Frame;
