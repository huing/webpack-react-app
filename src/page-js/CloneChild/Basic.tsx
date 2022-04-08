import { Button, Card, Form, Input } from 'antd';
import React, { useState } from 'react';
import CardForm from './CardForm';

const Basic: React.FC<{}> = (props) => {
  console.log('basic', props);
  return (
    <CardForm title="基础设置">
      <Form.Item label="姓名" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="手机号" name="phone" rules={[{ pattern: /^1\d{10}$/ }]}>
        <Input />
      </Form.Item>
    </CardForm>
  );
};

export default Basic;
