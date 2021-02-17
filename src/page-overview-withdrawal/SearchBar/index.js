import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import BaseSearch from '@components/BaseSearch'
import { Input, DatePicker, Select } from 'antd'

const { Item } = BaseSearch

@inject('store')
@observer
class SearchBar extends Component {
  render() {
    return (
      <BaseSearch
        store={this.props.store}
        noNeed={['userId', 'nickName']}
      >
        <Item label="用户id" name="userId">
          <Input onPressEnter={this.props.store.$search} />
        </Item>
        <Item label='用户名' name='nickName'>
          <Input onPressEnter={this.props.store.$search} />
        </Item>
        <Item label="申请状态" name="status">
          <Select style={{width: 150}}>
            <Select.Option value={0}>待审核</Select.Option>
            <Select.Option value={1}>审核通过</Select.Option>
            <Select.Option value={2}>审核未通过</Select.Option>
            <Select.Option value={3}>已打款</Select.Option>
          </Select>
        </Item>
        <Item label='申请日期' name='createTime'>
          <DatePicker.RangePicker />
        </Item>
      </BaseSearch>
    )
  }
}
export default SearchBar