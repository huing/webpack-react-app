import React from 'react'
import {observer} from 'mobx-react'
import { Modal, Form, Input, Select } from 'antd'

@observer
class ModalSpu extends React.Component {
  render() {
    const {visibleSpu, okSpu, toggleModalSpu} = this.props.store
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      }
    }
    const onFinish = values => {
      console.log(values)
    }
    return (
      <Modal
        title="新建"
        visible={visibleSpu}
        onOk={okSpu}
        onCancel={toggleModalSpu}
        centered
        destroyOnClose
      >
        <Form {...layout} name="不知道干啥的" onFinish={onFinish}>
          <Form.Item name={['user', 'email']} label='spu头图' rules={[{
            type: 'email'
          }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'email']} label='spu头图' rules={[{
            type: 'email'
          }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'email']} label='spu头图' rules={[{
            type: 'email'
          }]}>
            <Select>
              <Select.Option>
                
              </Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}
export default ModalSpu