import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import {withRouter} from 'react-router-dom'
import {Popover} from 'antd'
import Cookies from 'js-cookie'

import './index.styl'

@withRouter
@inject('Root')
@observer 
class DemoPage extends Component {
  logout = () => {
    Cookies.remove('userName', {path: '/'})
    this.props.history.replace('/login')
    window.location.reload()
  }

  componentDidMount() {
    let {mInfo, updateName} = this.props.Root
    if (mInfo.name === '') {
      updateName(Cookies.get('userName'))
    }
  }

  titleNode = () => {
    return (
      <span
        style={{fontSize: '14px', cursor: 'pointer'}}
        onClick={this.logout}
      >
        退出
      </span>
    )
  }

  render() {
    const {name} = this.props.Root.mInfo
    return (
      <header className="page-header">
        <div className='global-header'>
          <div className="global-header-right">
            <Popover content={this.titleNode()}>
              {name && <span className='name'>{name}</span>}
            </Popover>
          </div>
        </div>
      </header>
    )
  }
}
export default DemoPage