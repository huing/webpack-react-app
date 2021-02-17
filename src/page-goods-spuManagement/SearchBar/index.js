import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import BaseSearch from '@components/BaseSearch'
import { Input, Select, Button } from 'antd'

const { Item, Extra } = BaseSearch

@inject('store')
@observer
class SearchBar extends Component {
  render() {
    const { toggleModal } = this.props.store
    return (
      <BaseSearch
        store={this.props.store}
        noNeed={['orderId']}
        // initialValue={{sort_rule: 'create_time.desc'}}
      >
        <Item label="spu编号" name="orderId">
          <Input onPressEnter={this.props.store.$search} />
        </Item>
        <Item label="spu名称" name="orderId">
          <Input onPressEnter={this.props.store.$search} />
        </Item>
        <Item label="商品分类" name="orderId">
          <Select style={{width: 100}}>
            <Select.Option>是</Select.Option>
            <Select.Option>否</Select.Option>
          </Select>
        </Item>
        <Item label="sku名称" name="orderId">
          <Input onPressEnter={this.props.store.$search} />
        </Item>
        <Item label="是否上架" name="createdDate">
          <Select style={{width: 100}}>
            <Select.Option>是</Select.Option>
            <Select.Option>否</Select.Option>
          </Select>
        </Item>
        <Extra>
          <Item>
            <Button type="primary" onClick={() => toggleModal('visibleSpu')}>
              新增
            </Button>
          </Item>
        </Extra>
      </BaseSearch>
    )
  }
}
export default SearchBar