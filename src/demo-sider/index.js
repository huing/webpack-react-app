import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {withRouter, Link} from 'react-router-dom'
import {Menu, Icon} from 'antd'
import menus, {menuData} from '../config/menu'
import {getFlatMenuKeys, getSelectedMenuKeys, getDefaultCollapsedSubMenus} from '../config/util'
import './index.styl'

const {SubMenu} = Menu
const flatMenuKeys = getFlatMenuKeys(menuData)

@withRouter
@observer 
class DemoSider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pathname: props.location.pathname,
      flatMenuKeysLen: flatMenuKeys.length,
      openKeys: getDefaultCollapsedSubMenus(flatMenuKeys, props),
    }
  }

  isMainMenu = key => {
    return menuData.some(item => {
      if (key) {
        return item.key === key || item.path === key
      }
      return false
    })
  }

  handleOpenChange = openKeys => {
    const moreThanOne = openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1
    this.setState({
      openKeys: moreThanOne ? [openKeys.pop()] : [...openKeys],
    })
  }

  static getDerivedStateFromProps(props, state) {
    const {pathname, flatMenuKeysLen} = state
    if (props.location.pathname !== pathname || flatMenuKeys.length !== flatMenuKeysLen) {
      return {
        pathname: props.location.pathname,
        flatMenuKeysLen: flatMenuKeys.length,
        openKeys: getDefaultCollapsedSubMenus(flatMenuKeys, props),
      }
    }
    return null
  }

  render() {
    const {
      location: {pathname},
    } = this.props
    const {openKeys} = this.state
    let selectedKeys = getSelectedMenuKeys(flatMenuKeys, pathname)
    if (!selectedKeys.length && openKeys) {
      selectedKeys = [openKeys[openKeys.length - 1]]
    }
    let props = {}
    if (openKeys) {
      props = {
        openKeys: openKeys.length === 0 ? [...selectedKeys] : openKeys,
      }
    }
    return (
      <div className="demo-sider"> 
        <Menu
          key="Menu"
          mode="inline"
          onOpenChange={this.handleOpenChange}
          selectedKeys={selectedKeys}
          {...props}
        >
          {
            (menus || []).map(item => 
              (item.routes && item.routes.length > 0) ? (
                <SubMenu 
                  key={item.path} 
                  title={<span>
                    <Icon type={item.icon} />
                    {item.name}
                  </span>}
                >
                  {item.routes.map((routeItem, ii) =>
                    <Menu.Item key={routeItem.path}>
                      <Link to={routeItem.path}><Icon type={item.icon} />{item.name}</Link>
                    </Menu.Item>
                  )}
                </SubMenu>
              ) : (
                <Menu.Item key={item.path}>                  
                  <Link to={item.path}><Icon type={item.icon} />{item.name}</Link>
                </Menu.Item>
              )
            )
          }
        </Menu>
      </div>
    )
  }
}
export default DemoSider