import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { menuData } from "../config/routes";
import { getFlatMenuKeys, getSelectedMenuKeys, getDefaultCollapsedSubMenus } from "../config/util";

const flatMenuKeys = getFlatMenuKeys(menuData);

const getMenuData = (currentMenuData) =>
  currentMenuData.map((item) => {
    if (item.path === "/login") {
      return undefined;
    }
    if (Array.isArray(item.routes) && item.routes.length) {
      return (
        <Menu.SubMenu key={item.path} title={<span>{item.name}</span>}>
          {getMenuData(item.routes)}
        </Menu.SubMenu>
      );
    }
    // 'markdown/html(/:id)'.replace(/\(\/:id\)/g, '')
    // 'markdown/js/:id?'.replace(/\/:id\?/g, '')
    return (
      <Menu.Item key={item.path}>
        <Link to={item.path.replace(/:id\?/g, "")}>{item.name}</Link>
      </Menu.Item>
    );
  });

@observer
class Sider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: props.location.pathname,
      flatMenuKeysLen: flatMenuKeys.length,
      openKeys: getDefaultCollapsedSubMenus(flatMenuKeys, props),
    };
  }

  isMainMenu = (key) => {
    return menuData.some((item) => {
      if (key) {
        return item.key === key || item.path === key;
      }
      return false;
    });
  };

  handleOpenChange = (openKeys) => {
    const moreThanOne = openKeys.filter((openKey) => this.isMainMenu(openKey)).length > 1;
    this.setState({
      openKeys: moreThanOne ? [openKeys.pop()] : [...openKeys],
    });
  };

  static getDerivedStateFromProps(props, state) {
    const { pathname, flatMenuKeysLen } = state;
    if (props.location.pathname !== pathname || flatMenuKeys.length !== flatMenuKeysLen) {
      return {
        pathname: props.location.pathname,
        flatMenuKeysLen: flatMenuKeys.length,
        openKeys: getDefaultCollapsedSubMenus(flatMenuKeys, props),
      };
    }
    return null;
  }

  render() {
    const {
      location: { pathname },
    } = this.props;
    const { openKeys } = this.state;
    let selectedKeys = getSelectedMenuKeys(flatMenuKeys, pathname);
    if (!selectedKeys.length && openKeys) {
      selectedKeys = [openKeys[openKeys.length - 1]];
    }
    let props = {};
    if (openKeys) {
      props = {
        openKeys: openKeys.length === 0 ? [...selectedKeys] : openKeys,
      };
    }

    return (
      <Menu key="Menu" mode="inline" onOpenChange={this.handleOpenChange} selectedKeys={selectedKeys} {...props}>
        {getMenuData(menuData)}
      </Menu>
    );
  }
}
export default Sider;
