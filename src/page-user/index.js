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
          <footer className="section-c-footer">
            <div className="footer-bottom"></div>
            footer
          </footer>
        </div>
        <div className="section-a section-b"></div>
      </div> 
    )
  }
}
export default DemoPage