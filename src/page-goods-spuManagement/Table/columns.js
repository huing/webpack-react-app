import React, { Fragment } from 'react'
import {Switch} from 'antd'
import Operation from '@components/Operation'

export default store => [
  {
    title: 'spu编号',
    dataIndex: 'id'
  },
  {
    title: 'spu头图',
    render: ({ spuPhoto }) => (
      <img src={spuPhoto} alt='spuPhoto' width={120} height={120} />
    )
  },
  {
    title: 'spu名称',
    dataIndex: 'spuName',
    width: 300,
  },
  {
    title: '商品分类',
    dataIndex: 'spuCatName'
  },
  {
    title: 'sku数量',
    dataIndex: 'skuNum'
  },
  {
    title: '上架状态',
    render: ({isShelf, weights}) => (
      <Fragment>
        <div>权重: {weights}</div>
        <Switch checked={!!isShelf} />
      </Fragment>
    )
  },
  {
    title: '操作',
    render: record => (
      <Operation type="column">
        <Operation.Item onClick={() => store.toggleModal('visibleSpu', record)}>编辑</Operation.Item>
        <Operation.Item onClick={() => store.deleteSpu(record.id)}>删除</Operation.Item>
        <Operation.Item onClick={() => store.toggleModal('visibleSku', {...record, addSku: true})}>新增sku</Operation.Item>
      </Operation>
    )
  }
]
