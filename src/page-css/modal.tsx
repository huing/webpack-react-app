import { Button, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import './modal.less'

let timer: NodeJS.Timeout

// function CountButton({ onClick, count, type }: any) {
//   console.log(type)
//   return <button onClick={onClick}>{count}</button>
// }

const CountButton = React.memo(function CountButton({
  onClick,
  count,
  type,
}: any) {
  console.log(type)
  return <button onClick={onClick}>{count}</button>
})

const ModalDemo: React.FC<{}> = () => {
  const [visible, setVisible] = useState(false)

  // const [count1, setCount1] = React.useState(0)
  // const increment1 = () => setCount1((c) => c + 1)

  // const [count2, setCount2] = React.useState(0)
  // const increment2 = () => setCount2((c) => c + 1)

  const [count1, setCount1] = React.useState(0)
  const increment1 = React.useCallback(() => setCount1((c) => c + 1), [])

  const [count2, setCount2] = React.useState(0)
  const increment2 = React.useCallback(() => setCount2((c) => c + 1), [])

  useEffect(() => {}, [])
  const handleClose = () => {
    console.log('handleClose')
    setVisible(false)
  }
  console.log(count1, count2)

  return (
    <div>
      <CountButton count={count1} onClick={increment1} type="CountButton1" />
      <CountButton count={count2} onClick={increment2} type="CountButton2" />
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        点击
      </Button>
      <div className={`exampleModal ${visible ? 'show' : 'hidden'}`}>
        <div className="exampleMask" onClick={handleClose}></div>
        <div className="exampleBody">
          <div className="exampleBodyCenter">
            <div className="exampleClose" onClick={handleClose}>
              X
            </div>
            <div>header</div>
            <div>content</div>
            <div>footer</div>
          </div>
        </div>
      </div>
      <Modal visible={false}>
        <div>content</div>
      </Modal>
    </div>
  )
}

export default ModalDemo
