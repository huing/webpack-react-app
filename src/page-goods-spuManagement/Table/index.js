import React, { Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import { Table, Switch } from 'antd'
import BaseTable from '@components/BaseTable'
import Operation from '@components/Operation'
import columns from './columns'

@inject('store')
@observer
class DoubleTable extends BaseTable {
  expandedRow = (record) => {
    const {store} = this.props
    const columns = [{
      title: 'sku编号', 
      dataIndex: 'id' 
    }, {
      title: 'sku头图', 
      render: ({ skuPhoto }) => (
        <img src={skuPhoto} alt='skuPhoto' width={120} height={120} />
      )
    }, {
      title: 'sku名称', 
      dataIndex: 'skuName',
    }, {
      title: '成本', 
      render: ({cost, pkgCost}) => (
        <Fragment>
          <div>采购成本：￥{cost}</div>
          <div>包装成本：￥{pkgCost}</div>
        </Fragment>
      )
    }, {
      title: '单价', 
      render: ({origPrice, disPrice, sharePrice}) => (
        <Fragment>
          <div>原单价：￥{origPrice}</div>
          <div>特惠单价：￥{disPrice}</div>
          <div>分享专属：￥{sharePrice}</div>
        </Fragment>
      )
    }, {
      title: '上架状态',
      render: ({isShelf}) => (
        <Fragment>
          <Switch checked={!!isShelf} />
        </Fragment>
      )
    }, {
      title: '操作', 
      render: record => (
        <Operation type="column">
          <Operation.Item onClick={() => store.toggleModal('visibleSku', record)}>编辑</Operation.Item>
          <Operation.Item onClick={() => store.deleteSku(record.id)}>删除</Operation.Item>
        </Operation>
      )
    }]
    return <Table rowKey='id' columns={columns} dataSource={record.skuList} pagination={false} />
  }
  $store = this.props.store
  $columns = columns(this.props.store)
  $bordered = false
  $style = { marginTop: 20 }
  $expandable = {expandedRowRender: record => this.expandedRow(record)}
}
export default DoubleTable
