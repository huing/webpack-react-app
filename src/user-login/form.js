import React from 'react'
import {Form, Input, Icon, Button} from 'antd'

export default Form.create()(
  props => {
    const {submit} = props
    const {getFieldDecorator} = props.form
    return (
      <Form onSubmit={submit}>
        <Form.Item>
          {getFieldDecorator('account', {
            initialValue: 'admin',
            rules: [{
              required: true, message: 'Please input your username!',
            }],
          })(
            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            initialValue: '123456',
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
    )
  })

