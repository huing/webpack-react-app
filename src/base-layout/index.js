import React, {Component} from 'react'
import Cookies from 'js-cookie'
import DocumentTitle from 'react-document-title'
import {Route, Link} from 'react-router-dom'
import {observer, inject} from 'mobx-react'
import {Tooltip} from 'antd'
import getPageTitle from '../common/util'
import {breadcrumbNameMap} from '../config/menu'
import Loading from './Loading'
import {routes} from '../config/routes'
import logo from './logo.svg'
import Sider from '../demo-sider'
import './index.styl'

@inject('Root')
@observer
class BaseLayouts extends Component {
  // constructor(props) {
  //   super(props) 
  //   console.log('base-layout', props)
  // }

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
    const {pathname} = this.props.location
    // console.log('breadcrumbNameMap', breadcrumbNameMap)
    return (
      <DocumentTitle title={getPageTitle(pathname, breadcrumbNameMap)}>
        <div className='base-layout'>
          <section className="section-layout">
            <aside className="aside-layout">
              <Link to='/home' className="link-logo">
                <img src={logo} alt="logo" />
              </Link>
              <Sider />
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
      </DocumentTitle>
    )
  }
}

export default BaseLayouts

