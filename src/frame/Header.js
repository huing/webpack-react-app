import React, {Component} from 'react'
import {observer} from 'mobx-react'
import Cookies from 'js-cookie'
import './index.styl'

@observer 
class Header extends Component {
  logout = () => {
    this.props.history.replace('/login')
    Cookies.remove()
  }

  render() {
    return (
      <div className="page-header">
        <span>{(Cookies.getJSON('LOGINDATA') || {}).name}</span>
        <span
          style={{fontSize: '14px', cursor: 'pointer', marginLeft: 24}}
          onClick={this.logout}
        >
          退出
        </span>
      </div>
    )
  }
}
export default Header