import React from 'react'
import Operation from '@components/Operation'

const { Item } = Operation

export default store => [
  {
    title: 'spu编号',
    dataIndex: 'orderId'
  },
  {
    title: 'spu头图',
    dataIndex: 'nickName'
  },
  {
    title: 'spu名称',
    dataIndex: 'totalPay'
  },
  {
    title: '商品分类',
    dataIndex: 'payMethod'
  },
  {
    title: 'sku数量',
    dataIndex: 'addr'
  },
  {
    title: '上架状态',
  },
  {
    title: '订单状态',
    dataIndex: 'status'
  },
  {
    title: '操作',
    render: record => (
      <Operation type="column">
        <Item>编辑</Item>
        <Item>删除</Item>
        <Item onClick={store.toggleModal(record)}>新增sku</Item>
      </Operation>
    )
  }
]
