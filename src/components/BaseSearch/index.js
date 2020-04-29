import React, { useState, useEffect, Children, Fragment } from 'react'
import { Form, Button, Row } from 'antd'
import { SearchOutlined, RollbackOutlined, UpOutlined, DownOutlined } from '@ant-design/icons'
import './index.styl'

const Item = ({ children }) => <Fragment>{children}</Fragment>
const Extra = () => null

const BaseSearch = ({
  style = {},
  initialValue = null,
  showReset = true,
  showSearch = true,
  searchText = '搜索',
  resetText = '重置',
  onAfterReset = null,
  onSearch = null,
  before = null,
  after = null,
  noNeed = [],
  overflowCount = 4,
  store,
  children,
}) => {
  const [expand, setExpand] = useState(true)
  const [form] = Form.useForm()
  let count = 0

  const onValuesChange = (props, values) => {
    console.log('------------onValuesChange', props, values)
    const { noNeed, onChange, store } = props
    if (onChange) {
      onChange(values, noNeed)
    } else {
      store && store.$setParams && store.$setParams(values, noNeed)
    }
  }
  const reset = () => {
    form.resetFields()
    if (onAfterReset) {
      onAfterReset(null, noNeed)
    } else {
      store && store.$setParams && store.$setParams(null, noNeed)
    }
  }
  const search = () => {
    if (onSearch) {
      onSearch()
    } else {
      store && store.$search && store.$search()
    }
  }
  useEffect(() => {
    store && (store.$searchBar = form)
    return () => {
      if (onAfterReset) {
        onAfterReset(null, noNeed)
      } else {
        store && store.$resetParams && store.$resetParams()
      }
    }
  })
  const handleChild = () => {
    const res = []
    let extra = null
    Children.forEach(children, (child, index) => {
      if (child) {
        if (child.type === Item) {
          let hidden = !!child.props.hidden
          if (!hidden) {
            count++
          }
          if (!expand && count > overflowCount) {
            hidden = true
          }
          if (!hidden) {
            res.push(<Form.Item key={index} label={child.props.label} name={child.props.name}>{child.props.children}</Form.Item>)
          }
          
        }
        if (child.type === Extra) {
          extra = child.props.children
        }
      }
    })
    return { res, extra }
  }
  const handleExpand = () => {
    setExpand(!expand)
  }
  const changeExtra = item => {
    if (item && item.type === Item) {
      return (
        <Form.Item label={item.props.label}>
          {Children.only(item.props.children)}
        </Form.Item>
      )
    } else {
      return <Form.Item>{item}</Form.Item>
    }
  }
  const setStoreInitialParams = (store, value) => {
    if (value && store && store.$initParams) {
      store.$initParams(value)
    }
  }
  setStoreInitialParams(store, initialValue)
  const { extra, res } = handleChild()

  return (
    <Form style={style} className='search-bar' initialValues={initialValue} onValuesChange={onValuesChange}>
      {before}
      <Row gutter={24}>{res}</Row>
      <div className='search-bar-btn'>
        {showSearch && (
          <Form.Item>
            <Button type="primary" icon={<SearchOutlined />}  onClick={search}>
              {searchText}
            </Button>
          </Form.Item>
        )}
        {showReset && (
          <Form.Item>
            <Button type="dashed" icon={<RollbackOutlined />} onClick={reset}>
              {resetText}
            </Button>
          </Form.Item>
        )}
        {after}
        {Children.map(extra, item => changeExtra(item))}
        {count > overflowCount &&
          <Form.Item>
            <div onClick={handleExpand}>
              {expand ? '收起' : '展开'}
              {expand ? <UpOutlined /> : <DownOutlined />}
            </div>
          </Form.Item>
        }
      </div>
    </Form>
  )
}
BaseSearch.Item = Item
BaseSearch.Extra = Extra

export default BaseSearch