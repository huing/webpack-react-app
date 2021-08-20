import React, { Component } from 'react'
import './borders.less'

class Borders extends Component {
  render() {
    return (
      <>
        <div className={'line20'} />
        <div className="m30 p30 box_linear_gradient_3"></div>
        <div className="m30 p30 box_linear_gradient_2"></div>
        <div className="m30 p30 box_linear_gradient_1"></div>

        <div className="m30 p30 box_background_image_1"></div>
        <div className="m30 p30 box_background_image"></div>
        <div className="m30 p30 box_border_image"></div>
        <div className="m30 p30 border"></div>
        <div className="m30 p30 border_reve"></div>
        <div className="m30 p30 border_groove"></div>
        <div className="m30 p30 border_groove_red"></div>
      </>
    )
  }
}

export default Borders
