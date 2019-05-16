import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {withRouter, Link} from 'react-router-dom'
import {Menu, Icon} from 'antd'
import {menuData} from '../config/menu'
import {getFlatMenuKeys, getSelectedMenuKeys, getDefaultCollapsedSubMenus} from '../config/util'

import './index.styl'

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
    console.log('openKeys', this.state.openKeys)
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
            (menuData || []).map(item => 
              (item.children && item.children.length) ? (
                <Menu.SubMenu 
                  key={item.path}  
                  title={<span>
                    <Icon type={item.icon} />
                    {item.name}
                  </span>}
                >
                  {
                    item.children.map(subItem =>
                      <Menu.Item key={subItem.path}>
                        <Link to={subItem.path}>
                          <Icon type={subItem.icon} />{subItem.name}
                        </Link>
                      </Menu.Item>
                    )
                  }
                </Menu.SubMenu>
              ) : (
                <Menu.Item key={item.path}>                  
                  <Link to={item.path}>
                    <Icon type={item.icon} />{item.name}
                  </Link>
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