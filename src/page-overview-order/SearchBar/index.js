import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import BaseSearch from '@components/BaseSearch'
import { Input, DatePicker } from 'antd'

const { Item } = BaseSearch
const { RangePicker } = DatePicker

@inject('store')
@observer
class SearchBar extends Component {
  render() {
    // const { } = this.props.store
    return (
      <BaseSearch
        store={this.props.store}
        noNeed={['orderId']}
        // initialValue={{sort_rule: 'create_time.desc'}}
      >
        <Item label="订单号" name="orderId">
          <Input onPressEnter={this.props.store.$search} />
        </Item>
        <Item label="下单日期" name="createdDate">
          <RangePicker />
        </Item>
      </BaseSearch>
    )
  }
}
export default SearchBar