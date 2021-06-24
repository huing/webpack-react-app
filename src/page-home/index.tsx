import React from "react";
import { observer } from "mobx-react";
import img from "@/assets/image/1.jpg";
import "./index.less";

console.log(process);
console.log(process.env);

@observer
class Home extends React.Component {
  componentDidMount() {
    const main: any = document.getElementById("mainImg");
    console.log(main);
    import("@/assets/image/1.jpg")
      .then((module) => {
        main!.src = module.default;
      })
      .catch((err) => {
        main!.textContent = err.message;
      });
  }
  // getSrc = async () => {
  //   const res = await import("@/assets/image/1.jpg");
  //   return res.default;
  // };
  render() {
    return (
      <div className="page-home">
        {/* 两种加载图片的方式，一个用import加载，一个用public下的目录 */}
        {/* <img src={this.getSrc()} alt="img" height="327px" /> */}
        <img id="mainImg" alt="img1" height="654px" />
        <img src={img} alt="img2" height="654px" />
        <img src="/logo192.png" alt="img3" height="250px" />
        <div className="foo" style={{ color: "red" }}>
          What color am I?
        </div>
        <div className="FBH">
          <div className="dot"></div>
          <div className="">
            <div className="line">123</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
