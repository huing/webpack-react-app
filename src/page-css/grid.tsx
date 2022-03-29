import React, { Component } from 'react'
import './grid.less'

class Grid extends Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <div className="one">One</div>
          <div className="two">Two</div>
          <div className="three">Three</div>
          <div className="four">Four</div>
        </div>
        <div className="wrapper1">
          <div className="one">One</div>
          <div className="two">Two</div>
          <div className="three">Three</div>
          <div className="four">Four</div>
        </div>
      </>
    )
  }
}

export default Grid
