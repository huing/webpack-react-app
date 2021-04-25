import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { Button } from "antd";
import "./index.styl";

console.log(process);
console.log(process.env);

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect", count);
    return () => {
      console.log("return", count);
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  );
}

// Example(0);

@observer
class Home extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="page-home">
        <img src="../../public/clipboard-css.png" alt="img" />
        <img src="/clipboard-css.png" alt="img" />
        <Example />
        {/* <div className="FBH">
          <div className="dot"></div>
          <div className="">
            <div className="line">123</div>
            <div className="line">123</div>
            <div className="line">123</div>
          </div>
        </div> */}
      </div>
    );
  }
}
export default Home;
