import React, { PureComponent } from 'react'
import { Breadcrumb } from 'antd'
import './index.styl'

const Item = Breadcrumb.Item

class BaseBread extends PureComponent {
  static defaultProps = {
    header: '',
  }

  render() {
    const {
      header,
      headerStyle,
    } = this.props

    const _header = Array.isArray(header) ? (
      <Breadcrumb separator=">">
        {header.map((item, i) => <Item key={i}>{item}</Item>)}
      </Breadcrumb>
    ) : (
      header
    )
    return (
      <div className='header-content'>
        {_header !== '' && (
          <header style={headerStyle} className='header'>
            {_header}
          </header>
        )}
      </div>
    )
  }
}
export default BaseBread