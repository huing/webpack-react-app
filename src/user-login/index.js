import React, {Component} from 'react'
import {Button, Form, Icon, Input, message} from 'antd'
import {observer, inject} from 'mobx-react'
import CryptoJS from 'crypto-js'
import md5 from 'md5'
import Cookies from 'js-cookie'
import * as io from '../api/main'
import './index.styl'

@inject('Login', 'Root')
@observer
class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    const {Root, Login, history, form} = this.props
    form.validateFields(async(err, values) => {
      if (!err) {
        Login.setLoading(true)
        let {userName, password} = values
        // const param = {
        //   staffMobile: '13663762157',
        //   staffPassword: md5('123456'),
        // }
        const param = {
          accountNumber: '17601307306',
          password: md5('123456'),
        }
        const result = await io.login(param)

        // const result = await fetch('http://localhost:8080/web/login/select', param)



        Login.setLoading(false)
        console.log('result', result)
        Login.setLoading(false)
        if (result.data) {
          let message = `M&${userName}&${password}`
          let key = 'react_starter'
          let session = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(message, key))
          Cookies.set('JSESSIONID', session, {path: '/'})
          Cookies.set('userName', userName, {path: '/'})
          Root.updateName(userName)
          history.push('/home')
        } else {
          message.error('账号：admin ； 密码：123456')
        }
      }
    })
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <div className="user-login"> 
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{
                required: true, message: 'Please input your username!',
              }],
            })(
              <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{required: true, message: 'Please input your Password!'}],
            })(
              <Input 
                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />} 
                type="password" 
                placeholder="Password" 
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>          
          </Form.Item>
        </Form>
      </div>
    )
  }
}
export default Form.create({name: 'normal_login'})(NormalLoginForm)