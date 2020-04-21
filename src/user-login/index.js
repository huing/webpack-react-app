import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import Cookies from 'js-cookie'

import PageUser from '../page-user'
import CustomizedForm from './form'

import './index.styl'

@inject('Login', 'Root')
@observer
class NormalLogin extends Component {
  handleSubmit = values => {
    const {Root, Login, history} = this.props
    Login.setLoading(true)
    Cookies.set('userName', values.account, {path: '/'})
    Root.updateName(values.account)
    history.push('/operation/home')
    Login.setLoading(false)
    window.location.reload()
  }

  render() {
    return (
      <PageUser>
        <div className="user-login"> 
          <div className="img" />
          <CustomizedForm submit={this.handleSubmit} />
        </div>
      </PageUser>
    )
  }
}
export default NormalLogin
