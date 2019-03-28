import React, {Component} from 'react'
import Cookies from 'js-cookie'
// import moment from 'moment'
import {Route, Link} from 'react-router-dom'
import {observer, inject} from 'mobx-react'
import {Tooltip} from 'antd'
import Loading from './Loading'
import {routes} from '../config/routes'
import './index.styl'

@inject('Root')
@observer
class BaseLayouts extends Component {
  logout = () => {
    Cookies.remove('JSESSIONID', {path: '/'})
    Cookies.remove('userName', {path: '/'})
    this.props.history.replace('/login')
  }

  componentWillMount() {
    let {userInfo, updateName} = this.props.Root
    if (userInfo.name === '') {
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
    const {name} = this.props.Root.userInfo
    return (
      <div className='base-layout'>
        <section className="section-layout">
          <aside className="aside-layout">
            <Link to="/home/table">表单</Link>
          </aside>
          <section className="section-layout-right">
            <header className="header">
              <div className='global-header'>
                <div className="global-header-right">
                  <span className='font icon-touxiang'></span>
                  <Tooltip title={this.titleNode()}>
                    <span className='name'>{name}</span>
                  </Tooltip>
                </div>
                
              </div>
            </header>
            <main>
              <Loading>
                {routes.map((item, i) =>
                  <Route key={item.path} path={item.path} component={item.component} exact />
                )}
              </Loading>
            </main>
          </section>          
        </section>
      </div>
    )
  }
}

export default BaseLayouts

