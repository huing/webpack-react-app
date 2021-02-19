import React from 'react'
import {observer, Provider} from 'mobx-react'
import {toJS} from 'mobx'
import { Descriptions, Table, Button } from 'antd'
import BaseBread from '@components/BaseBread'
import store from './store'
import './index.styl'

const columns = [{
  title: 'skuName',
  dataIndex: 'skuName',
}, {
  title: 'spuName',
  dataIndex: 'spuName',
}, {
  title: '图片',
  render: ({skuPhoto}) => (
    <img src={skuPhoto} alt='img' style={{width: 80}} />
  )
}, {
  title: '销售单价',
  dataIndex: 'origPrice',
}, {
  title: '购买数量',
  dataIndex: 'num',
}, {
  title: '优惠减免',
  dataIndex: 'disFee',
}, {
  title: '实付金额',
  dataIndex: 'payAmount',
}]

const columnsTwo = [{
  title: '序号',
  dataIndex: 'no',
}, {
  title: '款项',
  dataIndex: 'name',
}, {
  title: '原价',
  dataIndex: 'origPrice',
}, {
  title: '优惠减免',
  dataIndex: 'disFee',
}, {
  title: '应付金额',
  dataIndex: 'payAmount',
}]

@observer 
class OverviewOrder extends React.Component {
  componentDidMount() {
    store.init(this.props.match.params.id)
  }
  render() {
    const { detailInfo, toggleModal } = store
    const { orderId, nickName,createTime, payMethod,status, receiver, receiverPhone, addr, detailList, feeInfo } = toJS(detailInfo || {})
    return (
      <Provider store={store}>
        <BaseBread header={['业务总览', '订单管理', '订单详情']} />
        <div className="page-overview-order-detail">
          <Descriptions title='基本信息' column={3}>
            <Descriptions.Item label='订单编号'>{orderId}</Descriptions.Item>
            <Descriptions.Item label='下单用户'>{nickName}</Descriptions.Item>
            <Descriptions.Item label='下单时间'>{createTime}</Descriptions.Item>
            <Descriptions.Item label='支付方式'>{payMethod}</Descriptions.Item>
            <Descriptions.Item label='订单状态'>
            {{
              0: '待付款',
              1: '待发货',
              2: '已发货',
              3: '已完成',
              4: '订单取消',
              5: '退款中',
              6: '已退款',
            }[status]}
            </Descriptions.Item>
          </Descriptions>
          <Descriptions title='收货信息' column={3}>
            <Descriptions.Item label='收货人'>{receiver}</Descriptions.Item>
            <Descriptions.Item label='收货人联系方式'>{receiverPhone}</Descriptions.Item>
            <Descriptions.Item label='收货地址'>{addr}</Descriptions.Item>
          </Descriptions>
          <Table 
              title={() => '订单明细'}
              rowKey="id"
              columns={columns}
              dataSource={detailList || []}
              pagination={false}
            />
            <Table 
              rowKey="no"
              columns={columnsTwo}
              dataSource={feeInfo || []}
              pagination={false}
            />
            <div style={{margin: '24px 0'}} className="FBH FBAC">
              {status === 1 && <Button type='primary' onClick={() => toggleModal('visible')}>填写物流</Button>}
            </div>
        </div>
      </Provider>
    )
  }
}
export default OverviewOrder
