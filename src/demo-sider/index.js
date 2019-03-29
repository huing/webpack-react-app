import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {withRouter, Link} from 'react-router-dom'
import {Menu} from 'antd'
import menus from '../config/menu'
import './index.styl'

const {SubMenu} = Menu

@withRouter
@observer 
class DemoSider extends Component {
  state={
    keys: ['/home'],
    openKeys: ['/home'],
  }

  componentWillMount() {
    this.selectKey()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.selectKey()
    }
  }

  selectKey = () => {
    console.log()
    let keys = []
    keys.push(this.props.history.location.pathname)
    this.setState({keys: keys})
  }

  onSelect = ({key}) => {
    this.props.history.push(key)
  }

  titleNode = item => {
    return (
      <span>
        <span className={'font icon-' + item.icon}></span>
        <span>{item.name}</span>
      </span>
    )
  }

  render() {
    return (
      <div className="demo-sider">
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          selectedKeys={this.state.keys}
        >
          {
            (menus || []).map(item => 
              (item.list && item.list.lenght > 0) ? (
                <SubMenu key={item.path} title={this.titleNode(item)}>
                  {item.list.map((listItem, ii) =>
                    <Menu.Item key={`${item.path}${listItem.path}`}>
                      <Link to={item.path}>{item.name}</Link>
                    </Menu.Item>
                  )}
                </SubMenu>
              ) : (
                <Menu.Item key={item.path}>
                  <Link to={item.path}>{item.name}</Link>
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