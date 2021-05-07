import React from "react";
import { observer } from "mobx-react";
import img from "@/assets/image/1.jpg";
import "./index.less";

console.log(process);
console.log(process.env);

@observer
class Home extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="page-home">
        <div className="foo" style={{ color: "red" }}>
          What color am I?
        </div>
        <div className="FBH">
          <div className="dot"></div>
          <div className="">
            <div className="line">123</div>
          </div>
        </div>
        {/* 两种加载图片的方式，一个用import加载，一个用public下的目录 */}
        <img src={img} alt="img" height="327px" />
        <img src="/logo192.png" alt="img" height="250px" />
      </div>
    );
  }
}
export default Home;
