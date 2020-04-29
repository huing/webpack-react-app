import React from 'react'
import Operation from '@components/Operation'

const { Item } = Operation

export default store => [
  {
    title: '订单号',
    dataIndex: 'orderId'
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
    dataIndex: 'status'
  },
  {
    title: '下单时间',
    dataIndex: 'createTime'
  },
  {
    title: '操作',
    render: record => (
      <Operation type="column">
        <Item>详情</Item>
        <Item>
        发货清单
        </Item>
      </Operation>
    )
  }
]
