import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import Cookies from 'js-cookie'

import PageUser from '../page-user'
import CustomizedForm from './form'

import './index.styl'

@inject('Login', 'Root')
@observer
class NormalLogin extends Component {
  handleSubmit = e => {
    e.preventDefault()
    const {Root, Login, history} = this.props
    this.userForm.validateFields(async(err, values) => {
      if (!err) {
        Login.setLoading(true)
        Cookies.set('userName', values.account, {path: '/'})
        Root.updateName(values.account)
        history.push('/home')
        Login.setLoading(false)
        window.location.reload()
      }
    })
  }

  render() {
    return (
      <PageUser>
        <div className="user-login"> 
          <div className="img"></div>
          <CustomizedForm 
            ref={form => this.userForm = form}
            submit={this.handleSubmit} 
          />
        </div>
      </PageUser>
    )
  }
}
export default NormalLogin