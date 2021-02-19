import React from 'react'
import { observer, inject } from 'mobx-react'
import { Modal, Form, Input } from 'antd'

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  }
}

@inject('store')
@observer
class ModalDetail extends React.Component {
  formRef = React.createRef();
  render() {
    const { visible, toggleModal } = this.props.store
    return (
      <Modal
        title="填写物流"
        visible={visible}
        onCancel={() => toggleModal('visible')}
        centered
        destroyOnClose
      >
        <Form {...layout}>
          <Form.Item name='remark' label='发货商品' rules={[{
              required: true,
              message: '请输入',
            }]}>
            <Input placeholder='请输入' />
          </Form.Item>
          <Form.Item name='remark' label='物流选择' rules={[{
              required: true,
              message: '请输入',
            }]}>
            <Input placeholder='请输入' />
          </Form.Item>
          <Form.Item name='remark' label='物流单号' rules={[{
              required: true,
              message: '请输入',
            }]}>
            <Input placeholder='请输入' />
          </Form.Item>
          <Form.Item name='remark' label='运费' rules={[{
              required: true,
              message: '请输入',
            }]}>
            <Input placeholder='请输入' addonAfter='元' />
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}
export default ModalDetail