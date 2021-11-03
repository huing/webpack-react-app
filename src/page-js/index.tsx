import React from 'react'
import UploadInput from '../components/UploadInput'
// import getMap from './getMap'
// import Debounce from './debounce'
import HOCDemo from './HOCDemo'
import { Person } from './data'
import { PersonC } from './data1'
import ClassComp from './ClassComp'
import FuncComp from './FuncComp'
import { instanceOf } from 'prop-types'
import { autorun, computed, observable } from 'mobx'

const PageJS: React.FC = () => {
  var numbers = observable([1, 2, 3])
  var sum = computed(() => numbers.reduce((a, b) => a + b, 0))

  var disposer = autorun(() => console.log(sum.get()))
  console.log(disposer)
  // 输出 '6'
  numbers.push(4)
  // 输出 '10'

  // disposer()
  numbers.push(5)
  // 不会再输出任何值。`sum` 不会再重新计算。

  return (
    // call
    <div>
      {/*<Debounce />*/}
      {/*<HOCDemo />*/}
      {/*<UploadInput />*/}
      <ClassComp />
      {/*<FuncComp />*/}
    </div>
  )
}
export default PageJS

// sort
// 默认utf-16
// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// expected output: Array [1, 100000, 21, 30, 4]
const color = {
  红: 1,
  黄: 2,
  绿: 3,
}

const list = [
  { id: 1, name: '绿' },
  { id: 2, name: '黄' },
  { id: 3, name: '红' },
  { id: 4, name: '黄' },
]

// list.sort(function (a, b) {
//   return color[a.name] - color[b.name]
// })

// list.sort(function() {
//   return function (a, b) {
//     return [a.name].id - [b.name].id
//   }}
// })

// console.log('list', list)
