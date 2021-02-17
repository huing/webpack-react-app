import React from 'react'
import Operation from '@components/Operation'

const { Item } = Operation

export default store => [
  {
    title: '成员id',
    dataIndex: 'id'
  },
  {
    title: '用户名',
    dataIndex: 'name'
  },
  {
    title: '手机号',
    dataIndex: 'phone'
  },
  {
    title: '操作',
    render: record => (
      <Operation type="column">
        <Item onClick={() => store.toggleModal('visible', record)}>编辑</Item>
        <Item onClick={() => store.delete(record.id)}>删除</Item>
      </Operation>
    )
  }
]
