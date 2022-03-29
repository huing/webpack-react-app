import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import './index.less'

const PageScroll = () => {
  useEffect(() => {
    // const pageLoading = document.getElementById('scroll')
    // console.log(pageLoading)
    // pageLoading.scrollTop = 100
    setTimeout(() => {
      document.getElementsByClassName('ant-layout-content')[0].scrollTop = 100
    }, 1000)

    const scroll = (e) => {
      console.log(e)
      console.log(e.target.scrollTop)
      // console.log(123, e.currentTarget);
      // console.log(e.target);
      console.log(document.getElementById('scroll')?.scrollTop)
      console.log(
        document.getElementsByClassName('ant-layout-content')[0].scrollTop,
      )
    }
    document.addEventListener('scroll', scroll, true)
    return () => {
      document.removeEventListener('scroll', scroll, true)
    }
  }, [])

  return (
    <div className="page-scroll" id="scroll">
      {[1, 120, 160, 200, 240, 200].map((item) => (
        <div
          className="scroll-item"
          style={{ background: `rgba(${item}, 200, 255, 1)` }}
        ></div>
      ))}
    </div>
  )
}

export default PageScroll
