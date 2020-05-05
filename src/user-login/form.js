import React from 'react'
import {Form, Input, Button} from 'antd'

export default props => {
    const {submit} = props
    return (
      <Form onFinish={submit} initialValues={{ account: 'admin', password: '123456' }}>
        <Form.Item 
          name='account' 
          rules={[{required: true, message: 'Please input your username!'}]}
        >
          <Input
            placeholder="Username" 
            size="large"
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{required: true, message: 'Please input your Password!'}]}
        >
          <Input 
            type="password" 
            size="large"
            placeholder="Password" 
          />
        </Form.Item>
        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            className="login-form-button"
            size="large"
          >
            登录
          </Button>          
        </Form.Item>
      </Form>
    )
  }

