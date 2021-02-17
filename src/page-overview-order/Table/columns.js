import React from 'react'
import Operation from '@components/Operation'

const { Item } = Operation

export default store => [
  {
    title: '订单号',
    dataIndex: 'id'
  },
  {
    title: '下单用户',
    dataIndex: 'nickName'
  },
  {
    title: '订单金额',
    dataIndex: 'totalPay'
  },
  {
    title: '支付方式',
    dataIndex: 'payMethod'
  },
  {
    title: '收货地址',
    dataIndex: 'addr'
  },
  {
    title: '收货人信息',
    render: ({receiver, receiverPhone}) => (
      <div>
        <div>收货人: {receiver}</div>
        <div>联系方式: {receiverPhone}</div>
      </div>
    )
  },
  {
    title: '订单状态',
    render: ({status}) => (
      <div>
        {{
          0: '待付款',
          1: '待发货',
          2: '已发货',
          3: '已完成',
          4: '订单取消',
          5: '退款中',
          6: '已退款',
        }[status]}
      </div>
    ),
  },
  {
    title: '下单时间',
    dataIndex: 'createTime'
  },
  {
    title: '操作',
    render: record => (
      <Operation type="column">
        <Item href={`/operation/overview/order/detail/${record.id}`}>详情</Item>
        {record.status === 5 && <Item onClick={() => store.toggleModal(record)}>退款明细</Item>} 
      </Operation>
    )
  }
]
