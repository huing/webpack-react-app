import React, {Component} from 'react'
import {Provider, observer} from 'mobx-react'
import Cookies from 'js-cookie'
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import cls from 'classnames'

import PageHeader from '../page-header'
import MenuSider from '../base-sider'

import routes from '../config/routes'
import store from '../store'

import './index.styl'

@withRouter
@observer
class Frame extends Component {
  componentDidMount() {
    const {location, history} = this.props
    if (location.pathname !== '/login' && !Cookies.get('userName')) {
      history.replace('/login')
    } 
    // console.log('componentDidMount') 
  }

  render() {
    const {location: {pathname}} = this.props
    return (
      <DocumentTitle title="Demo">
        <Provider {...store}>
          <div className="page-frame">
            <PageHeader /> 
            
            {/* includes */}
            {pathname.indexOf('/login') === -1 && <MenuSider />}
            <div className={cls({
              'page-section': true,
              'page-section-left': pathname.indexOf('/login') === -1,
            })}
            >
              <Switch>
                {
                  (routes || []).map(item => (
                    <Route exact={item.exact} path={item.path} component={item.component} key={item.path} />
                  ))
                }
                <Redirect exact from="/" to="/login" />
                <Route render={() => <div>404</div>} />
              </Switch>
            </div>
          </div>
        </Provider>    
      </DocumentTitle>        
    )
  }
}

export default Frame
