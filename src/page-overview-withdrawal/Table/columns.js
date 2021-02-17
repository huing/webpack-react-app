import React from 'react'
import Operation from '@components/Operation'

const { Item } = Operation

export default store => [
  {
    title: '用户id',
    dataIndex: 'userId'
  },
  {
    title: '用户名',
    dataIndex: 'nickName'
  },
  {
    title: '提现金额',
    dataIndex: 'amount'
  },
  {
    title: '申请状态',
    dataIndex: 'statusName'
  },
  {
    title: '收款方式',
    dataIndex: 'receiveMethod'
  },
  {
    title: '收款账户',
    dataIndex: 'receiveAccount'
  },
  {
    title: '申请时间',
    dataIndex: 'createTime'
  },
  {
    title: '操作人',
    dataIndex: 'optPerson',
  },
  {
    title: '操作',
    render: record => (
      <Operation type="column">
        {
          record.statusName === '待审核' && <Item onClick={() => store.toggleModal('visible', record)}>审核</Item>
        }
        <Item onClick={() => store.toggleModal('detail', record)}>详情</Item>
      </Operation>
    )
  }
]
