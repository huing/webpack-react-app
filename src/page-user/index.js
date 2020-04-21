import React, {Component} from 'react'
import {observer} from 'mobx-react'
import './index.styl'

@observer 
class DemoPage extends Component {
  render() {
    return (
      <div className="page-user">
        <div className="section-a"></div>
        <div className="section-c">
          {this.props.children}
          <footer className="section-c-footer"></footer>
        </div>
        <div className="section-a section-b">
          <div className="footer-bottom"></div>
        </div>
      </div> 
    )
  }
}
export default DemoPage