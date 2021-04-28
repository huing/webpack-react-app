import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react";
import Cookies from "js-cookie";
import "./index.styl";

@withRouter
@observer
class Header extends Component {
  logout = () => {
    this.props.history.push("/login");
    Cookies.remove("LOGINDATA");
  };

  render() {
    return (
      <div className="page-header">
        <span>{(Cookies.getJSON("LOGINDATA") || {}).name}</span>
        <span style={{ fontSize: "14px", cursor: "pointer", marginLeft: 24 }} onClick={this.logout}>
          退出
        </span>
      </div>
    );
  }
}
export default Header;
