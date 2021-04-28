import React from "react";
import { observer } from "mobx-react";
import "./index.less";
import img from "@/assets/image/1.jpg";

console.log(process);
console.log(process.env);

@observer
class Home extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="page-home">
        <img src={img} alt="img" />
        <img src="/clipboard-css.png" alt="img" />
        <div className="FBH">
          <div className="dot"></div>
          <div className="">
            <div className="line">123</div>
            <div className="line">123</div>
            <div className="line">123</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
