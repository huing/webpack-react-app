import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import BaseSearch from '@components/BaseSearch'
import { Select, Input, DatePicker, Button } from 'antd'

const { Item, Extra } = BaseSearch
const { Option } = Select
const { RangePicker } = DatePicker

@inject('store')
@observer
class SearchBar extends Component {
  render() {
    // const { } = this.props.store
    return (
      <BaseSearch
        style={{ margin: '20px 0' }}
        store={this.props.store}
        noNeed={['id', 'nick', 'phone', 'merchantName', 'propKeyword']}
        initialValue={{sort_rule: 'create_time.desc'}}
      >
        <Item label="流水号" name="id">
          <Input onPressEnter={this.props.store.$search} />
        </Item>
        <Item label="用户名称" name="nick">
          <Input onPressEnter={this.props.store.$search} />
        </Item>
        <Item label="联系方式" name="phone">
          <Input onPressEnter={this.props.store.$search} />
        </Item>
        <Item label="所属店铺" name="merchantName">
          <Input onPressEnter={this.props.store.$search} />
        </Item>
        <Item label="涉及道具" name="propKeyword">
          <Input onPressEnter={this.props.store.$search} />
        </Item>
        <Item label="排序规则" name="sort_rule">
          <Select>
            <Option value="create_time.desc">下单时间降序</Option>
            <Option value="create_time.asc">下单时间升序</Option>
            <Option value="receive_date.desc">交付时间降序</Option>
            <Option value="receive_date.asc">交付时间升序</Option>
            <Option value="update_time.desc">更新时间降序</Option>
          </Select>
        </Item>
        <Item label="下单日期" name="created_at">
          <RangePicker />
        </Item>
        <Item label="交付/回库" name="delivery_at">
          <RangePicker />
        </Item>
        <Extra>
          <Item>
            <Button type="primary">
              123
            </Button>
          </Item>
        </Extra>
      </BaseSearch>
    )
  }
}
export default SearchBar