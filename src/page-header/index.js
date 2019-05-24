import React, {Component} from 'react'
import {observer} from 'mobx-react'
// import {Tooltip} from 'antd'
import Cookies from 'js-cookie'

import './index.styl'

@observer 
class DemoPage extends Component {
  logout = () => {
    Cookies.remove('userName', {path: '/'})
    this.props.history.replace('/login')
  }

  // componentWillMount() {
  //   let {mInfo, updateName} = this.props.Root
  //   if (mInfo.name === '') {
  //     updateName(Cookies.get('userName'))
  //   }
  // }

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
    // const {name} = this.props.Root.mInfo

    return (
      <header className="page-header">
        <div className='global-header'>
          {/* <div className="global-header-right">
            <span className='font icon-touxiang'></span>
            <Tooltip title={this.titleNode()}>
              <span className='name'>{name}</span>
            </Tooltip>
          </div> */}
          
        </div>
      </header>
    )
  }
}
export default DemoPage