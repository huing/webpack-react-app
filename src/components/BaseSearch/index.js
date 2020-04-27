import React, { Component, Children, cloneElement, Fragment } from 'react'
import { Form, Button, Icon, Row, Col } from 'antd'
import SearchItem from './SearchItem'
import './index.styl'

const FormItem = Form.Item
const Item = ({ children }) => <Fragment>{children}</Fragment>
const Extra = () => null

@Form.create({
  onValuesChange: (props, values) => {
    const { noNeed, onChange, store } = props
    if (onChange) {
      onChange(values, noNeed)
    } else {
      store && store.$setParams && store.$setParams(values, noNeed)
    }
  }
})
class BaseSearch extends Component {
  static defaultProps = {
    style: {},
    showReset: true,
    showSearch: true,
    searchText: '搜索',
    resetText: '重置',
    onAfterReset: null,
    onSearch: null,
    expand: null,
    expandOp: null,
    auto: true,
    noNeed: [],
    overflowCount: 4
  }
  count = 0
  state = {
    _expand: true
  }
  reset = () => {
    const { onAfterReset, form, store, noNeed } = this.props
    form.resetFields()
    if (onAfterReset) {
      onAfterReset(null, noNeed)
    } else {
      store && store.$setParams && store.$setParams(null, noNeed)
    }
  }
  search = () => {
    const { onSearch, store } = this.props
    if (onSearch) {
      onSearch()
    } else {
      store && store.$search && store.$search()
    }
  }

  componentDidMount() {
    const { form, onInited, store } = this.props
    store && (store.$searchBar = form)
    onInited && onInited(form)
  }

  componentWillUnmount() {
    const { store, onAfterReset, noNeed } = this.props
    if (onAfterReset) {
      onAfterReset(null, noNeed)
    } else {
      store && store.$resetParams && store.$resetParams()
    }
  }

  handleProps = item => {
    let _item = item
    if (item.props) {
      let cloneObj = {}
      const itemProps = item.props
      const { form, store } = this.props
      Object.keys(itemProps).forEach(prop => {
        if (itemProps[prop] && itemProps[prop].type === Item) {
          cloneObj[prop] = (
            <SearchItem
              {...itemProps[prop].props}
              isForm={false}
              form={form}
              store={store}
            />
          )
        }
      })
      _item = cloneElement(item, cloneObj)
    }
    return _item
  }
  handleChild = (children, isExpand) => {
    const { overflowCount, form, store, onSearch } = this.props
    const res = []
    let extra = null
    Children.forEach(children, (item, i) => {
      if (item) {
        if (item.type === Item) {
          let hidden = item.props.hidden
          if (!hidden) {
            this.count++
          }
          if (!isExpand && this.count > overflowCount) {
            hidden = true
          }
          res.push(
            <Col span={6} key={i}>
              <SearchItem
                key={i}
                {...item.props}
                hidden={hidden}
                form={form}
                store={store}
                onSearch={onSearch}
              >
                {this.handleProps(item.props.children)}
              </SearchItem>
            </Col>
          )
        } else if (item.type === Extra) {
          extra = item.props.children
        } else {
          res.push(<Item key={i}>{this.handleProps(item)}</Item>)
        }
      }
    })
    return { res, extra }
  }
  handleExpand = () => {
    const { expand, onExpand } = this.props
    if (onExpand) {
      onExpand(!expand)
    } else {
      this.setState({
        _expand: !this.state._expand
      })
    }
  }

  changeExtra = item => {
    if (item && item.type === Item) {
      return (
        <FormItem label={item.props.label}>
          {Children.only(item.props.children)}
        </FormItem>
      )
    } else {
      return <FormItem>{item}</FormItem>
    }
  }

  render() {
    const {
      showReset,
      showSearch,
      searchText,
      resetText,
      before,
      after,
      overflowCount,
      expand,
      style,
      children,
      expandOp
    } = this.props
    const { _expand } = this.state
    const isExpand = expand === undefined || expand === null ? _expand : expand
    this.count = 0
    const { extra, res } = this.handleChild(children, isExpand)
    return (
      <Form layout="inline" style={style} className='search-bar'>
        {before}
        <Row gutter={24}>{res}</Row>
        <div className='search-bar-btn'>
          {showSearch && (
            <FormItem>
              <Button type="primary" icon="search" onClick={this.search}>
                {searchText}
              </Button>
            </FormItem>
          )}
          {showReset && (
            <FormItem>
              <Button type="dashed" icon="rollback" onClick={this.reset}>
                {resetText}
              </Button>
            </FormItem>
          )}
          {after}
          {Children.map(extra, item => this.changeExtra(item))}
          {this.count > overflowCount &&
            (expandOp || (
              <FormItem>
                <a href type="dashed" onClick={this.handleExpand}>
                  {isExpand ? '收起' : '展开'}
                  <Icon type={isExpand ? 'up' : 'down'} />
                </a>
              </FormItem>
            ))}
        </div>
      </Form>
    )
  }
}
BaseSearch.Item = Item
BaseSearch.Extra = Extra

export default BaseSearch