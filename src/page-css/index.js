import React, {Component} from 'react'
import {observer} from 'mobx-react'
import './index.less'

@observer 
class PageCSS extends Component {
  getText = () => {
    const item = []
    for (let i = 0; i < 100; i++) {
      item.push(<div key={i} className="card_node"></div>)
    }
    return item
  }
  render() {
    return (
      <div className="page-css">
        <div className="card">
          {this.getText()}
        </div>

        <div className='m30 p30 box_linear_gradient_3'></div>
        <div className='m30 p30 box_linear_gradient_2'></div>
        <div className='m30 p30 box_linear_gradient_1'></div>

        <div className='m30 p30 box_background_image_1'></div>
        <div className='m30 p30 box_background_image'></div>
        <div className='m30 p30 box_border_image'></div>
        <div className='m30 p30 border'></div>
        <div className='m30 p30 border_reve'></div>
        <div className='m30 p30 border_groove'></div>
        <div className='m30 p30 border_groove_red'></div>

        <div className="box" />

        <div className="line" />
      </div> 
    )
  }
}
export default PageCSS