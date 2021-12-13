import React from 'react'
import { observer } from 'mobx-react'
import img from '@/assets/image/1.jpg'
import './index.less'

// enum A {
//   上 = 'up',
//   下 = 'down',
// }

// const e: Array<A> = ['up', A.上, '上', 'down', A.下, 'd']
// // 此条件将始终返回 "false"，因为类型 ""上" | "下"" 和 "A.上" 没有重叠
// console.log(e[0] === A.上)
// const b: Array<keyof typeof A> = ['up', A.上, '上', 'down', A.下, 'd']
// // 此条件将始终返回 "false"，因为类型 ""上" | "下"" 和 "A.上" 没有重叠
// console.log(b[0] === '上')

// const a: A[] = ['up', A.上]
// console.log(b[0] === A.上)

// type C = 'up' | 'down'
// const c: C[] = ['up', 'down']
// console.log(c[0] === A.上)

console.log(process)
console.log(process.env)

@observer
class Home extends React.Component {
  componentDidMount() {
    const main: any = document.getElementById('mainImg')
    console.log(main)
    import('@/assets/image/1.jpg')
      .then((module) => {
        main!.src = module.default
      })
      .catch((err) => {
        main!.textContent = err.message
      })
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
        <div className="foo" style={{ color: 'red' }}>
          What color am I?
        </div>
        <div className="FBH">
          <div className="dot"></div>
          <div className="">
            <div className="line">123</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
