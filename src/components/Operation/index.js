import React, { PureComponent, Children } from 'react'
import cls from 'classnames'
import {omit} from '@util'
import './index.styl'

const types = {
  del: '#999',
  danger: '#f00',
  disabled: '#ccc',
  primary: '#1890ff'
}
const Item = ({ style = {}, type, href, disabled, children, ...rest }) => {
  const _rest = omit(rest, ['gutter', 'separatorHeight'])
  const props = {
    style: {
      color: types[disabled ? 'disabled' : type],
      cursor: disabled && 'not-allowed',
      ...style
    },
    className: 'item'
  }
  if (disabled) {
    return <span {...props}>{children}</span>
  }
  return href ? (
    <a href={href} {...props} {..._rest} rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <span {...props} {..._rest}>
      {children}
    </span>
  )
}
Item.defaultProps = {
  type: 'primary',
  disabled: false,
  gutter: 4
}
class Operation extends PureComponent {
  static defaultProps = {
    separator: <span className='separator-default' />,
    separatorHeight: 20,
    gutter: 10,
    type: 'inline' //column,设置为column时,separator将无效
  }
  getActionItem = () => {
    const { separator, type, children, gutter, separatorHeight } = this.props
    const items = []
    Children.forEach(children, item => {
      if (item && item.type === Item && !item.props.hidden) {
        items.push(item)
      }
    })
    if (type !== 'column') {
      const len = items.length
      const _items = []
      items.forEach((item, i) => {
        _items.push(item)
        if (i < len - 1) {
          _items.push(
            <span
              style={{ margin: `0 ${gutter}px`, height: separatorHeight }}
              className='separator'
              key={'separator-' + i}
            >
              {separator}
            </span>
          )
        }
      })
      return _items
    }
    return items
  }

  render() {
    const { type } = this.props
    return (
      <span
        className={cls({
          'column': type === 'column',
          'inline': type === 'inline'
        })}
      >
        {this.getActionItem()}
      </span>
    )
  }
}
Operation.Item = Item
export default Operation
