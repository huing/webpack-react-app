import React, { Component } from 'react'
import Action from '@components/Action'
import { observer, inject } from 'mobx-react'
const Item = Action.Item

@inject('store')
@observer
class Tab extends Component {
  render() {
    const { tab, changeTab } = this.props.store
    return (
      <Action active={tab} onChange={changeTab}>
        {[
          { title: '全部', value: '' },
          { title: '待付款', value: '0' },
          { title: '待出库', value: '1' },
          { title: '待发货', value: '2' },
          { title: '已发货', value: '3' },
          { title: '已完成', value: '7' },
          { title: '订单取消', value: '8' },
          { title: '退款中', value: '5' },
          { title: '已退款', value: '6' }
        ].map(item => (
          <Item value={item.value} key={item.title}>
            {item.title}
          </Item>
        ))}
      </Action>
    )
  }
}
export default Tab