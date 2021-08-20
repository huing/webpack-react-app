import React, { Component } from 'react'
import { observer } from 'mobx-react'
import './index.less'
import Omit from './omit'
import BFC from './bfc'
import Borders from './borders'
import JuZhong from './juzhong'

@observer
class PageCSS extends Component {
  render() {
    return (
      <div className="page-css">
        {/*<Omit />*/}
        {/*<BFC />*/}
        {/*<Borders />*/}
        <JuZhong />
      </div>
    )
  }
}

export default PageCSS
