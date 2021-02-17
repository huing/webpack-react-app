import React from "react";
import { observer, inject } from "mobx-react";
import { Modal, Form, Input, Switch, Space, Button, Cascader } from "antd";
import { toJS } from 'mobx';
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import UploadImage from "@components/UploadImage";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};

@inject("store")
@observer
class ModalSpu extends React.Component {
  formRef = React.createRef();
  okHandle = async () => {
    const { modalDetail } = this.props.store;
    const data = await this.formRef.current.validateFields();
    const { headImg, photoDetail, isShelf,spuCat, ...rest } = data || {};
    const params = {
      id: modalDetail.id || undefined,
      ...rest,
      isShelf: isShelf ? 1 : 0,
      headImg: headImg
        .map((item) => item.url)
        .toString(),
      photoDetail: photoDetail
        .map((item) => item.url),
      spuCat: spuCat[1],
    };
    
    this.props.store.okSpu(params);
  };
  getInit = () => {
    const { visibleSpu, modalDetail, detailInfo } = this.props.store;
    if (!visibleSpu) {
      return
    }
    const { headImg, photoDetail, isShelf, ...rest } = toJS(detailInfo || {})
    const initialValues = modalDetail.id ? {
      ...rest,
      headImg: (headImg || '').split(',').filter(item => item).map((item, index) => ({uid: `-${index + 1}`, url: item})),
      photoDetail: (photoDetail || []).filter(item => item).map((item, index) => ({uid: `-${index + 1}`, url: item})),
      isShelf: !!isShelf,
    } : {
      isShelf: false
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
    const { visibleSpu, toggleModal, modalDetail, catList } = this.props.store;
    console.log('visibleSpu', visibleSpu)
    return (
      <Modal
        title={modalDetail.id ? "编辑spu" : "新建spu"}
        visible={visibleSpu}
        onOk={this.okHandle}
        onCancel={() => toggleModal("visibleSpu")}
        centered
        width={800}
        destroyOnClose
      >
        <Form {...layout} ref={this.formRef} initialValues={this.getInit()}>
          <Form.Item
            name="headImg"
            label="spu头图"
            rules={[{ required: true }]}
          >
            <UploadImage count={1} />
          </Form.Item>
          <Form.Item
            name="spuName"
            label="spu名称"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="spuCat"
            label="所属类目"
            rules={[{ required: true }]}
          >
            <Cascader fieldNames={{ label: 'name', value: 'code', children: 'sun' }} options={catList || []} />
          </Form.Item>
          <Form.Item
            name="weights"
            label="展示权重"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="isShelf"
            label="上架状态"
            rules={[{ required: true }]}
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
          <Form.Item label="规格属性">
            <Form.List name="spec">
              {(fields, { add, remove }) => {
                return (
                  <div>
                    {fields.map((field) => (
                      <Space
                        key={field.key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="start"
                      >
                        <Form.Item
                          {...field}
                          name={[field.name, "name"]}
                          fieldKey={[field.fieldKey, "name"]}
                          rules={[{ required: true }]}
                        >
                          <Input placeholder="属性名" />
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "value"]}
                          fieldKey={[field.fieldKey, "value"]}
                          rules={[{ required: true }]}
                        >
                          <Input placeholder="属性值" />
                        </Form.Item>

                        <MinusCircleOutlined
                          onClick={() => {
                            remove(field.name);
                          }}
                        />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => {
                          add();
                        }}
                        block
                      >
                        <PlusOutlined />
                      </Button>
                    </Form.Item>
                  </div>
                );
              }}
            </Form.List>
          </Form.Item>
          <Form.Item
            name="photoDetail"
            label="图文详情"
            rules={[{ required: true }]}
          >
            <UploadImage />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
export default ModalSpu;
