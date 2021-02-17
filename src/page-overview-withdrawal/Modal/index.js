import React from 'react'
import { observer, inject } from 'mobx-react'
import { Modal, Form, Button, Input } from 'antd'
import Api from '../../api'

@inject('store')
@observer
class ModalSku extends React.Component {
  formRef = React.createRef();
  handleClick = async (status) => {
    const {modalInfo, toggleModal, $getList} = this.props.store
    const fieldValues = await this.formRef.current.validateFields()
    await Api.cwdReviewApi({
      id: modalInfo.id,
      status,
      remark: fieldValues.remark
    })
    toggleModal('visible')
    $getList()
  }
  render() {
    const {visible, toggleModal} = this.props.store
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 20,
      }
    }
    return (
      <Modal
        title="提现审核"
        visible={visible}
        onCancel={() => toggleModal('visible')}
        centered
        destroyOnClose
        footer={[
          <Button type='primary' key='danger' onClick={() => this.handleClick(2)}>审核驳回</Button>,
          <Button type='primary' key='ok' onClick={() => this.handleClick(1)}>审核通过</Button>
        ]}
      >
        <Form {...layout} ref={this.formRef}>
          <Form.Item name='remark' label='审核备注' rules={[{
            required: true,
            message: '请输入备注',
          }]}>
            <Input.TextArea placeholder='请输入' />
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}
export default ModalSku