import React from 'react'
import {observer} from 'mobx-react'
import { Modal, Form } from 'antd'

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
          <Form.Item>

          </Form.Item>
        </Form>
      </Modal>
    )
  }
}
export default ModalSpu