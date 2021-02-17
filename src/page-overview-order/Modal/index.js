import React from 'react'
import { observer, inject } from 'mobx-react'
import { Modal, Form, Input, Table } from 'antd'
import { toJS } from 'mobx';
import UploadImage from "@components/UploadImage"

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  }
}

const columns = [{
  title: 'skuName',
  dataIndex: 'skuName',
}, {
  title: 'spuName',
  dataIndex: 'spuName',
}, {
  title: '图片',
  render: ({skuPhoto}) => (
    <igm src={skuPhoto} alt='img' style={{width: 80}} />
  )
}, {
  title: '数量',
  dataIndex: 'num',
}]

@inject('store')
@observer
class ModalDetail extends React.Component {
  formRef = React.createRef();
  render() {
    const {visible, toggleModal, detailInfo} = this.props.store
    const { type, skuList, reason, statusName, logisticCode, logisticPhoto } = toJS(detailInfo || {})
    return (
      <Modal
        title="退款明细"
        visible={visible}
        onCancel={() => toggleModal('visible')}
        centered
        destroyOnClose
      >
        <Form {...layout} ref={this.formRef}>
          <Form.Item label='退换类型'>
            <div>{type}</div>
          </Form.Item>
          <Form.Item label='退换商品'>
            <Table 
              rowKey='skuName'
              columns={columns}
              dataSource={skuList || []}
              pagination={false}
            />
          </Form.Item>
          <Form.Item label='退换原因'>
            <div>{reason}</div>
          </Form.Item>
          <Form.Item label='退换状态'>
            <div>{statusName}</div>
          </Form.Item>
          <Form.Item name='remark' label='审核备注' rules={[{
            required: true,
            message: '请输入备注',
          }]}>
            <Input.TextArea placeholder='请输入' />
          </Form.Item>
          <Form.Item label='物流单号'>
            <div>{logisticCode || '等待用户填写'}</div>
          </Form.Item>
          <Form.Item label='物流单照片'>
            {
              logisticPhoto ? 
              <UploadImage initialValue={{logisticPhoto: [{url: logisticPhoto, uid: '-1'}]}} /> :  
              <div>{logisticPhoto || '等待用户上传'}</div>
            }
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}
export default ModalDetail