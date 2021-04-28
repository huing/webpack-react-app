import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import "./index.css";

let id = null;
@observer
class PageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mousestate: 0,
      oldEvent: null,
      left: 0,
      index: 0,
    };
  }

  @action handleBtnClick = () => {
    // const modal = document.getElementById('myModal')
    // const btn = document.getElementById('myBtn')
    // const closeBtn = document.getElementById('closeBtn')
    document.getElementById("myModal").style.display = "block";
  };

  @action handleCloseBtn = () => {
    document.getElementById("myModal").style.display = "none";
  };

  componentDidMount() {
    const that = this;
    // window.onclick = event => {
    //   if (event.target === document.getElementById('myModal')) {
    //     document.getElementById('myModal').style.display = 'none'
    //   }
    // }

    // 首先获取视图层元素
    const swiperEl = document.querySelector(".swiper");
    // 在视图层里边查找容器元素
    const containerEl = swiperEl.querySelector(".swiper-container");

    // 获取到所有的滑块元素
    const itemEls = containerEl.querySelectorAll(".swiper-item");
    console.log(itemEls);
    // 获取到滑块的宽度
    const itemWidth = itemEls[0].offsetWidth;

    const parent = document.getElementById("margintop");

    id = setInterval(() => {
      const nodeList = document.querySelectorAll(".rect");
      parent.appendChild(nodeList[0]);

      // 默认向左滑动
      // that.setState(prevState => {
      //   return {
      //     index: prevState.index + 1
      //   }
      // })

      // 如果滑动到最后一个滑块，则回到第一个滑块
      // if (that.state.index > itemEls.length - 1) {
      //   that.setState({
      //     index: 0
      //   })
      // }

      // 下面的代码跟我们鼠标抬起的事件的代码一样的，要不要考虑简单的封装一下？
      // 追加一个move样式
      containerEl.className += " move";
      // 当过度动画结束后，一定要把这个类给移除掉
      containerEl.addEventListener("transitionend", () => {
        // 正则替换 \s+ 表示一个或多个空白字符
        containerEl.className = containerEl.className.replace(/\s+move/, "");
      });
      // that.setState((prevState, props) => {
      //   // console.log(prevState, props)
      //   return {
      //     left: 0 - itemWidth * prevState.index
      //   }
      // })

      // containerEl.style.left = that.state.left + 'px'
    }, 3000);

    // containerEl.addEventListener('mousedown', (event) => {
    //   that.setState({
    //     mousestate: 1,
    //     oldEvent: event,
    //     startEvent: event,
    //   })
    //   console.log('鼠标按下了')
    // })

    // containerEl.addEventListener('mousemove', (event) => {
    //   if (that.state.mousestate !== 1) return

    //   // if (event.pageX < that.state.startEvent.pageX) {
    //   //   that.setState((prevState, props) => {
    //   //     return {
    //   //       // left: prevState.left - (that.state.oldEvent.pageX - event.pageX)
    //   //       index: prevState.index + 1
    //   //     }
    //   //   })
    //   // } else {
    //   //   that.setState((prevState, props) => {
    //   //     return {
    //   //       // left: prevState.left + (event.pageX - that.state.oldEvent.pageX)
    //   //       index: prevState.index - 1
    //   //     }
    //   //   })
    //   // }

    //   // that.setState({
    //   //   oldEvent: event
    //   // })

    //   containerEl.style.left = that.state.left + 'px'
    //   console.log('鼠标移动了')
    // })
    // containerEl.addEventListener('mouseup', (event) => {
    //   that.setState({
    //     mousestate: 0,
    //   })

    //   if (event.pageX < that.state.startEvent.pageX) {
    //     that.setState((prevState, props) => {
    //       return {
    //         index: prevState.index + 1
    //       }
    //     })
    //   } else {
    //     that.setState((prevState, props) => {
    //       return {
    //         index: prevState.index - 1
    //       }
    //     })
    //   }

    //   if (that.state.index < 0) {
    //     that.setState({
    //       index: 0
    //     })
    //   } else if (that.state.index > itemEls.length - 1) {
    //     that.setState({
    //       index: itemEls.length - 1
    //     })
    //   }

    //   // 追加一个move样式
    //   containerEl.className += ' move';
    //   // 当过度动画结束后，一定要把这个类给移除掉
    //   containerEl.addEventListener('transitionend', () => {
    //       // 正则替换 \s+ 表示一个或多个空白字符
    //       containerEl.className = containerEl.className.replace(/\s+move/, '');
    //   })

    //   that.setState((prevState, props) => {
    //     console.log(prevState, props)
    //     return {
    //       left: 0 - itemWidth * prevState.index
    //     }
    //   })

    //   containerEl.style.left = that.state.left + 'px'
    //   console.log('鼠标抬起了')
    // })
  }

  componentWillUnmount() {
    clearInterval(id);
  }

  render() {
    return (
      <div className="page-swiper">
        <div className="swiper-test">
          <div className="swiper">
            <div className="swiper-container" id="margintop">
              <div id="item1" className="swiper-item rect" style={{ background: "#000" }}>
                1
              </div>
              <div id="item2" className="swiper-item rect" style={{ background: "#4269eb" }}>
                2
              </div>
              <div id="item3" className="swiper-item rect" style={{ background: "#247902" }}>
                3
              </div>
              <div id="item4" className="swiper-item rect" style={{ background: "#747902" }}>
                4
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PageModal;
