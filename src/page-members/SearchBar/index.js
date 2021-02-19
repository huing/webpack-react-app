import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import BaseSearch from '@components/BaseSearch'
import { Input, Button } from 'antd'

const { Item, Extra } = BaseSearch

@inject('store')
@observer
class SearchBar extends Component {
  render() {
    return (
      <BaseSearch
        store={this.props.store}
        noNeed={['id', 'name', 'phone']}
      >
        <Item label="成员id" name="id">
          <Input onPressEnter={this.props.store.$search} />
        </Item>
        <Item label='用户名' name='name'>
          <Input onPressEnter={this.props.store.$search} />
        </Item>
        <Item label="手机号" name="phone">
          <Input onPressEnter={this.props.store.$search} />
        </Item>
        <Extra>
          <Item>
            <Button type="primary" onClick={() => this.props.store.toggleModal('visible')}>
              新增
            </Button>
          </Item>
        </Extra>
      </BaseSearch>
    )
  }
}
export default SearchBar