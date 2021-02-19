import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Table, Pagination } from 'antd'
import { toJS } from 'mobx'

const noop = () => {}

@observer
class BaseTable extends Component {
  constructor(p) {
    super(p)
    this.$store.$getList(1)
  }
  $store = {
    $list: [],
    $loading: false,
    $pagination: {
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      showSizeChanger: false,
      current: 1,
      pageSize: 20,
      total: 0
    },
    $getList: noop,
    $paging: noop,
    $selectedRowKeys: [],
    $onSelectChange: noop
  }
  $pageSize = 20
  $rowKey = 'id'
  $columns = []
  $footer = null
  $title = null
  $bordered = false
  $size = 'default'
  $rowSelection = null
  $style = {}
  $selected = false
  $afterDidMount = noop
  $is_show_pagination = true
  $is_show_pagination_noAll = false //去掉全部的分页
  $shouldGetListWhenDidMount = true
  /*
     额外的信息这个会显示在每一列数据的头部
     此时，columns中每一项的render属性将失效，由$render来代替，参数为(record,index)
     */
  $extra = null
  //其他表格的配置
  $getOtherProps = () => {
    return {}
  }
  componentDidMount() {
    if (this.$shouldGetListWhenDidMount) {
      this.$store.$getList(1)
      this.$afterDidMount()
    }
  }
  componentWillUnmount() {
    this.$store.$clearParams()
  }
  handleClick=(current)=>{
    this.$store.$getList(current)
}
  render() {
    const {
      $list,
      $loading,
      $pagination,
      $selectedRowKeys,
      $onSelectChange,
      $pageSize
    } = this.$store
    const otherProps = this.$getOtherProps(this.$store) || {}
    const {
      $size,
      $bordered,
      $columns,
      $title,
      $footer,
      $rowKey,
      $rowSelection,
      $selected,
      $style,
      $extra,
      $is_show_pagination,
      $is_show_pagination_noAll,
      $expandable,
      $scroll,
    } = this

    console.log('this---', this)
    let rowSelection = {
      selectedRowKeys: $selectedRowKeys,
      onChange: $onSelectChange
    }
    if ($rowSelection) {
      rowSelection = { ...rowSelection, ...$rowSelection }
    }
    let flag = typeof $extra === 'function'
    let _list = []
    let _columns = $columns
    if (flag) {
      $pagination.pageSize = $pageSize * 2
      $pagination.showSizeChanger = false
      $list.forEach(item => {
        _list.push({ ...item, [$rowKey]: item[$rowKey] + '__clone__' })
        _list.push(item)
      })
      let len = _columns.length
      _columns = _columns.map((item, i) => {
        item.render = (value, record, index) => {
          let obj = {
            children: value,
            props: {}
          }
          if ((index + 1) % 2 !== 0) {
            obj.props.colSpan = i === 0 ? len : 0
            obj.children = $extra(record, index)
            return obj
          } else {
            return item.$render ? item.$render(value, record, index) : value
          }
        }
        return item
      })
    }
    return (
      <div>
        <Table
          size={$size}
          style={$style}
          bordered={$bordered}
          columns={_columns}
          dataSource={flag ? _list : toJS($list)}
          loading={$loading}
          title={$title}
          rowSelection={$selected || $rowSelection ? rowSelection : null}
          footer={$footer}
          onChange={this.$store.$paging}
          pagination={$is_show_pagination ? $pagination : false}
          rowKey={r => r[$rowKey]}
          expandable={$expandable}
          scroll={$scroll ? $scroll : null}
          {...otherProps}
        />
        {!$is_show_pagination && !$is_show_pagination_noAll && (
          <Pagination 
            current={$pagination.current}
            total={$pagination.total}
            showTotal={total => `共 ${$pagination.total} 条`}
            onChange={this.handleClick}
            pageSize={20}
          />
        )}
      </div>
    )
  }
}
export default BaseTable