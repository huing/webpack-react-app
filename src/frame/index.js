import React, {Component} from 'react'
import {Provider, observer} from 'mobx-react'
import Cookies from 'js-cookie'
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import {Layout} from 'antd'
import PageHeader from '../page-header'
import MenuSider from '../base-sider'
// import Login from '../user-login';
import routes from '../config/routes'
import store from '../store'

import './index.styl'
import './index.less'

const { Header, Content, Sider } = Layout

@withRouter
@observer
class Frame extends Component {
  componentDidMount() {
    const {location, history} = this.props
    if (location.pathname !== '/login' && !Cookies.get('userName')) {
      history.replace('/login')
    }
  }
  render() {
    console.log(this.props.children)
    return (
      <DocumentTitle title="Demo">
        <Provider {...store}>
          <Layout>
            <Sider
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
              }}
            >
              <div className='logo'></div>
              <MenuSider />
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
              <Header  style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }}>
                <PageHeader />
              </Header>
              <Content style={{ marginTop: 64, overflow: 'initial',  padding: '0 20px' }}>
                <Switch>
                  {
                    (routes || []).map(item => (
                      <Route exact={item.exact} path={'/operation' + item.path} component={item.component} key={item.path} />
                    ))
                  }
                  <Redirect exact from="/" to="/login" />
                  <Route render={() => <div>404</div>} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Provider>    
      </DocumentTitle>        
    )
  }
}

export default Frame
