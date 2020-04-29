import React from 'react'
import Operation from '@components/Operation'

const { Item } = Operation

export default store => [
  {
    title: 'ID',
    dataIndex: 'id'
  },
  {
    title: '操作',
    render: record => (
      <Operation type="column">
        <Item>编辑</Item>
        <Item>
          权限设置
        </Item>
        <Item>删除</Item>
      </Operation>
    )
  }
]
