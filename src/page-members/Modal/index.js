import React from 'react'
import { observer, inject } from 'mobx-react'
import { Modal, Form, Input } from 'antd'

@inject('store')
@observer
class ModalMember extends React.Component {
  formRef = React.createRef();
  handleClick = async () => {
    const fieldValues = await this.formRef.current.validateFields()
    this.props.store.save(fieldValues)
  }
  render() {
    const {visible, toggleModal, modalInfo} = this.props.store
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 16,
      }
    }
    return (
      <Modal
        title={modalInfo.id ? '编辑成员' : '新建成员'}
        visible={visible}
        onCancel={() => toggleModal('visible')}
        onOk={this.handleClick}
        centered
        destroyOnClose
      >
        <Form {...layout} ref={this.formRef} initialValues={modalInfo}>
          <Form.Item name='name' label='用户名' rules={[{
            required: true,
            message: '请输入用户名',
          }]}>
            <Input placeholder='请输入' />
          </Form.Item>
          <Form.Item name='phone' label='手机号' rules={[{
            required: true,
            message: '请输入手机号',
          }]}>
            <Input placeholder='请输入' maxLength={11} />
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}
export default ModalMember