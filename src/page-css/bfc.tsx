import React, { Component } from 'react'
import './bfc.less'

class BFC extends Component {
  render() {
    return (
      <>
        <div className={'line20'} />
        <div className="blue-inner">blue有margin</div>
        <div className="red-outer">
          {/*  red 有 overflow，这行汉字会影响塌陷 */}
          <div className="green-inner">green有margin</div>
        </div>
        <div className={'line20'} />
        <div className="box box-overflow">
          <div className="float">float</div>
          <div className="container container-overflow container-height">
            <div>height 300</div>
            <div>container-overflow</div>
          </div>
        </div>
        <div className={'line20'} />
        <div className="box box-overflow">
          <div className="float">float</div>
          <div className="container container-height">
            <div>height 300</div>
            <div>no container-overflow</div>
          </div>
        </div>
        <div className={'line20'} />
        <div className="box box-overflow">
          <div className="float">float</div>
          <div className="container">container</div>
        </div>
        <div className={'line20'} />
        <div className="box">
          {/*  可以试一下把float放container下面的效果 */}
          <div className="float">float</div>
          <div className="container">container</div>
        </div>
      </>
    )
  }
}

export default BFC
