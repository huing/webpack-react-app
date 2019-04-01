import React, {Component} from 'react'
import {observer} from 'mobx-react'
import DocumentTitle from 'react-document-title'
import FormLogin from '../user-login'
import getPageTitle from '../common/util'
import './index.styl'

const breadcrumbNameMap = {
  '/login': {
    name: '登录',
    locale: 'title_login',
  },
  '/register': {
    name: '注册',
    locale: 'title_register',
  },
}
@observer
class UserLayout extends Component {
  constructor(props) {
    super(props) 
    console.log('user-layout', props)
  }

  render() {
    const {
      location: {pathname},
    } = this.props
    return (
      <DocumentTitle title={getPageTitle(pathname, breadcrumbNameMap)}>
        <div className="user-layout"> 
          <FormLogin {...this.props} />
        </div>
      </DocumentTitle>
    )
  }
}

export default UserLayout
