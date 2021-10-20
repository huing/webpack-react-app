import React, { useEffect, useRef, useState } from 'react'

/*
 节流: n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效
 防抖: n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时
 一个经典的比喻:

     想象每天上班大厦底下的电梯。把电梯完成一次运送，类比为一次函数的执行和响应

 假设电梯有两种运行策略 debounce 和 throttle，超时设定为15秒，不考虑容量限制

 电梯第一个人进来后，15秒后准时运送一次，这是节流

 电梯第一个人进来后，等待15秒。如果过程中又有人进来，15秒等待重新计时，直到15秒后开始运送，这是防抖
*/

// 防抖
function debounce(fun: Function, wait: number) {
  let timer: any
  // console.log('timer 1', timer)
  return function (...rest: any) {
    // let context = this
    clearTimeout(timer)

    console.log('timer', rest)
    timer = setTimeout(function () {
      fun()
      // fun.apply(context)
    }, wait)
  }
}
// 节流
function throtte(fun: Function, wait: number) {
  let timer: any
  console.log(timer)
  return function () {
    clearTimeout(timer)
    timer = setTimeout(fun, wait)
  }
}

const PageJS: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const [countD, setCountD] = useState<number>(0)
  const [countT, setCountT] = useState<number>(0)
  // const container = useRef(null)
  useEffect(() => {
    const container = document.getElementById('container')
    const handleCount = function (this: any) {
      console.log('mousemove', this)
      //  这种写法不生效
      // setCount(count + 1)

      setCount((count) => count + 1)

      //  这种写法不生效
      // const newCount = count
      // setCount(newCount + 1)
    }

    const handleCountD = function (this: any) {
      console.log('mousemove D', this)
      setCountD((countD) => countD + 1)
    }

    const handleCountT = function (this: any) {
      console.log('mousemove T', this)
      setCountT((countT) => countT + 1)
    }
    container?.addEventListener('mousemove', handleCount)
    container?.addEventListener('mousemove', debounce(handleCountD, 1000))
    container?.addEventListener('mousemove', throtte(handleCountT, 500))
    return () => {
      container?.removeEventListener('mousemove', handleCount)
      container?.removeEventListener('mousemove', handleCountD)
      container?.removeEventListener('mousemove', handleCountT)
    }
  }, [document.getElementById('container')])
  return (
    <div
      style={{ width: 200, height: 200, background: 'gray', textAlign: 'center' }}
      // ref={container}
      id={'container'}
    >
      <div>{count}</div>
      <div>{countD}</div>
      {/*<div>{countT}</div>*/}
    </div>
  )
}
export default PageJS
