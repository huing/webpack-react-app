import React from 'react'
import { observer, inject } from 'mobx-react'
import { Modal, Form, Button, Input } from 'antd'
import { toJS } from 'mobx';
import UploadImage from "@components/UploadImage"
// import Api from '../../api'

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
  handleClick = async (status) => {
    const {modalInfo, toggleModal, $getList} = this.props.store
    const fieldValues = await this.formRef.current.validateFields()
    // const { remark, voucher } = fieldValues || {}
    console.log(modalInfo, fieldValues)
    // await Api.cwdReviewApi({
    //   id: modalInfo.id,
    //   status,
    //   remark,
    //   voucher: voucher
    //   .map((item) => item.url),
    // })
    toggleModal('detail')
    $getList()
  }
  getInit = () => {
    const { detail, modalInfo } = this.props.store;
    if (!detail) {
      return
    }
    const { voucher, ...rest } = toJS(modalInfo || {})
    const initialValues = {
      ...rest,
      voucher: (voucher || '').split(',').filter(item => item).map((item, index) => ({uid: `-${index + 1}`, url: item})),
    }
    return initialValues
  }
  componentDidUpdate() {
    console.log('‘componentDidUpdate’，', this.formRef.current)
    if (this.formRef.current) {
      this.formRef.current.setFieldsValue(this.getInit())
    }
  }
  render() {
    const {detail, toggleModal, modalInfo} = this.props.store
    const { amount,statusName } = modalInfo || {}
    return (
      <Modal
        title="提现详情"
        visible={detail}
        onCancel={() => toggleModal('detail')}
        centered
        destroyOnClose
        footer={[
          statusName === '审核通过' && <Button type='primary' key='save' onClick={() => this.handleClick()}>保存</Button>
        ]}
      >
        <Form {...layout} ref={this.formRef}>
          <Form.Item label='提现金额'>
            <div>{amount}</div>
          </Form.Item>
          <Form.Item label='审核状态'>
          <div>{statusName}</div>
          </Form.Item>
          <Form.Item name='remark' label='审核备注' rules={[{
            required: true,
            message: '请输入备注',
          }]}>
            <Input.TextArea placeholder='请输入' />
          </Form.Item>
          <Form.Item name='voucher' label='打款凭证' rules={[{
            required: true,
            message: '请上传',
          }]}>
            <UploadImage />
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}
export default ModalDetail