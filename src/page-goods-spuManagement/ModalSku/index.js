import React from 'react';
import { observer, inject } from 'mobx-react';
import { Modal, Form, Input, Switch, Checkbox, Row, Col } from 'antd';
import { toJS } from 'mobx';
import UploadImage from '@components/UploadImage';

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

@inject('store')
@observer
class ModalSku extends React.Component {
  formRef = React.createRef();
  okHandle = async () => {
    const { modalDetail } = this.props.store;
    const data = await this.formRef.current.validateFields();
    const { headImg, isShelf, mktActiv, ...rest } = data || {}
    const params = {
      ...rest,
      id: modalDetail.addSku ? '' : modalDetail.id,
      spuId: modalDetail.addSku ? modalDetail.id : modalDetail.spuId,
      isShelf: isShelf ? 1 : 0,
      mktActiv: isShelf ? 1 : 0,
      headImg: headImg
        .map((item) => item.url),
    }
    this.props.store.okSku(params)
  };
  getInit = () => {
    const { visibleSku, modalDetail, detailInfo } = this.props.store;
    if (!visibleSku) {
      return
    }
    const { headImg, isShelf, mktActiv,...rest } = toJS(detailInfo || {})
    const initialValues = modalDetail.id ? {
      ...rest,
      headImg: (headImg || []).filter(item => item).map((item, index) => ({uid: `-${index + 1}`, url: item})),
      isShelf: !!isShelf,
      mktActiv: !!mktActiv,
    } : {
      isShelf: false,
      mktActiv: false
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
    const { visibleSku, toggleModal, modalDetail } = this.props.store;
    console.log('visibleSku', visibleSku)
    return (
      <Modal
        title={modalDetail.id && !modalDetail.addSku ? '编辑sku' : '新建sku'}
        visible={visibleSku}
        onOk={this.okHandle}
        onCancel={() => toggleModal('visibleSku')}
        centered
        width={800}
        destroyOnClose
      >
        <Form {...layout} ref={this.formRef} initialValues={this.getInit()}>
          <Form.Item name="headImg" label="sku头图" rules={[{ required: true }]} labelCol={{span: 3}} wrapperCol={{span: 21}}>
            <UploadImage />
          </Form.Item>

          <Row>
            <Col span={12}>
              <Form.Item
                name="skuName"
                label="sku名称"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="mktActiv"
                label="商城活动"
                valuePropName="checked"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Checkbox>今日特惠</Checkbox>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item name="cost" label="采购成本" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="pkgCost"
                label="包装成本"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item
                name="origPrice"
                label="销售单价"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="disPrice"
                label="特惠单价"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item
                name="sharePrice"
                label="分享特价"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="isShelf"
                label="上架状态"
                valuePropName="checked"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Switch />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item
                name="stock"
                label="库存量"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="shareProfit"
                label="分享收益"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}
export default ModalSku;