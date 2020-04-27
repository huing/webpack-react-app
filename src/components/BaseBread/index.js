import React, { PureComponent } from 'react'
import { Breadcrumb } from 'antd'
import cls from 'classnames'
import './index.styl'

const Item = Breadcrumb.Item

class BaseBread extends PureComponent {
  static defaultProps = {
    header: '',
    title: null,
    extra: null,
    top_height: 77
  }

  render() {
    const {
      header,
      headerStyle,
      contentStyle,
      bodyStyle,
      children,
      title,
      extra
    } = this.props

    const _header = Array.isArray(header) ? (
      <Breadcrumb separator=">">
        {header.map((item, i) => <Item key={i}>{item}</Item>)}
      </Breadcrumb>
    ) : (
      header
    )
    return (
      <div className='view'>
        {_header != '' && (
          <header style={headerStyle} className='header'>
            {_header}
          </header>
        )}

        <div
          style={contentStyle}
          className={cls('content', {
            'no-header': _header === ''
          })}
        >
          {title && (
            <div className='title'>
              <div className='title-left'>{title}</div>
              <div className='title-right'>{extra}</div>
            </div>
          )}
          <div style={bodyStyle} className='content-body'>
            {children}
          </div>
        </div>
      </div>
    )
  }
}
export default BaseBread