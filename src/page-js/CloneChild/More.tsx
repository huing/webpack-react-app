import { Button, Card, Form, Input } from 'antd';
import React, { useState } from 'react';

const More: React.FC<{}> = (props) => {
  console.log('more', props);
  return (
    <>
      <Form.Item label="地址" name="address">
        <Input />
      </Form.Item>
      <Form.Item
        label="年龄"
        name="age"
        rules={[{ type: 'integer', min: 0, max: 1000, transform: Number }]}
      >
        <Input />
      </Form.Item>
    </>
  );
};

export default More;
