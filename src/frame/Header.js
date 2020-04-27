import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {Popover} from 'antd'
import Cookies from 'js-cookie'
import './index.styl'

@observer 
class Header extends Component {
  logout = () => {
    Cookies.remove('userName', {path: '/'})
    this.props.history.replace('/login')
    window.location.reload()
  }

  componentDidMount() {
    let {adminName, updateName} = this.props.store
    if (adminName === '') {
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
    const {store} = this.props
    console.log(store)
    const {adminName} = store
    return (
      <div className="page-header">
        <Popover content={this.titleNode()}>
          {adminName && <span className='admin-name'>{adminName}</span>}
        </Popover>
      </div>
    )
  }
}
export default Header