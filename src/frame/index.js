import React, {Component} from 'react'
import {observer} from 'mobx-react'
import Cookies from 'js-cookie'
import {Route, Switch, withRouter} from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import {Layout} from 'antd'
import PageHeader from './Header'
import MenuSider from './Sider'
import routes from '../config/routes'
import store from './store'
import './index.styl'

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
    return (
      <DocumentTitle title="Demo">
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
            <MenuSider {...this.props} store={store} />
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ position: 'fixed', zIndex: 1, padding: '0 20px', width: 'calc(100% - 200px)'}}>
              <PageHeader {...this.props} store={store} />
            </Header>
            <Content style={{ marginTop: 64, overflow: 'auto' }}>
              <Switch>
                {
                  (routes || []).map(item => (
                    <Route exact={item.exact} path={'/operation' + item.path} component={item.component} key={item.path} />
                  ))
                }
                <Route render={() => <div>404</div>} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </DocumentTitle>        
    )
  }
}

export default Frame
