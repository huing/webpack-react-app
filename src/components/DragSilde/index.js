import React from "react";
import { observer } from "mobx-react";
import { action, observable, toJS } from "mobx";
import "./index.less";
import "./icon.less";

@observer
class DragSilde extends React.Component {
  @observable bMouseUp = true;

  @observable bExit = true;

  @observable text = "请按住滑块，拖动到最右边";

  @observable dx = 0; // dot-left box-width 滑块滑动的距离

  @observable difLeft = 0; // 鼠标落下的位置

  @observable difWidth = 0; // 滑道长度

  @action handleMouseDown = (e) => {
    console.log(e.target.className);
    e.preventDefault();
    this.bExit = true;
    if (e.target.className === "dot") {
      this.bExit = false;
    }
    if (this.bExit || this.flag) {
      return;
    }
    this.difLeft = e.pageX;
    const dragWidth = document.getElementsByClassName("drag")[0].clientWidth;
    const dotWidth = document.getElementsByClassName("dot")[0].clientWidth;
    this.difWidth = dragWidth - dotWidth;
    this.bMouseUp = false;
  };

  @action handleMouseMove = (e) => {
    e.preventDefault();
    if (this.bMouseUp || this.bExit || this.flag) {
      return;
    }
    this.dx = e.pageX - toJS(this.difLeft);
    if (this.dx < 0) {
      this.dx = 0;
    } else if (this.dx >= this.difWidth) {
      this.dx = this.difWidth;
    }
  };

  @action handleMouseUp = (e) => {
    e.preventDefault();
    this.bMouseUp = true;
    if (this.flag || this.bExit) {
      return;
    }
    this.dx = e.pageX - toJS(this.difLeft);
    if (this.dx < this.difWidth) {
      this.SlideCheckFail();
    } else if (this.dx >= this.difWidth) {
      this.SlideCheckSuccess();
    }
  };

  @action handleMouseLeave = (e) => {
    e.preventDefault();
    this.bMouseUp = true;
    if (this.flag || this.bExit) {
      return;
    }
    this.dx = e.pageX - toJS(this.difLeft);
    if (this.dx < this.difWidth) {
      this.SlideCheckFail();
    } else if (this.dx >= this.difWidth) {
      this.SlideCheckSuccess();
    }
  };

  @action SlideCheckFail = () => {
    this.text = "请按住滑块，拖动到最右边";
    // document.getElementById('dot').innerHTML = '&gt;&gt;'

    this.dx = 0;
    this.flag = false;
    const { verify } = this.props;
    verify(0);
  };

  @action SlideCheckSuccess = () => {
    this.text = "验证通过";
    document.getElementById("dot").innerHTML = "";
    document.getElementById("dot").className = "dot-span dot-margin";
    document.getElementById("text").className += " active";
    this.dx = this.difWidth;
    this.flag = true;
    const { verify } = this.props;
    verify(1);
  };

  render() {
    const { name } = this.props;
    return (
      <div onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove} onMouseUp={this.handleMouseUp} onMouseLeave={this.handleMouseLeave} className={name}>
        <div className="drag">
          <div className="box" style={{ width: this.dx }} />
          <div className="text" id="text">
            {this.text}
          </div>
          <div className="border" style={{ left: this.dx }}>
            <div
              className="dot"
              id="dot"
              // style={{left: this.dx}}
            >
              &gt;&gt;
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DragSilde;
