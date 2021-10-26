import React from 'react'
import UploadInput from '../components/UploadInput'
// import getMap from './getMap'
// import Debounce from './debounce'
import HOCDemo from './HOCDemo'
import { Person } from './data'
import { PersonC } from './data1'

// interface Person {
//   name: string
//   // age: number;
//   // location: string;
// }
//
// type k1 = keyof Person
// type k2 = keyof Person[]
// type k3 = keyof { [x: string]: Person }
// // console.log(k2)
//
// enum Difficulty {
//   Easy,
//   Intermediate,
//   Hard,
// }
//
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key]
// }

// let tsInfo = {
//   name: 'Typescript',
//   supersetOf: 'Javascript',
//   difficulty: Difficulty.Intermediate,
// }
//
// let difficulty: Difficulty = getProperty(tsInfo, 'difficulty') // OK
//
// let supersetOf: string = getProperty(tsInfo, 'superset_of') // Error

interface PersonA {
  name: string
}

const PageJS: React.FC = () => {
  const personA: PersonC = { name: 'lili a' }
  const person: Person = { name: 'lili' }
  console.log(personA, person)
  return (
    <div>
      {/*<Debounce />*/}
      <HOCDemo />
      <UploadInput />
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

list.sort(function (a, b) {
  // @ts-ignore
  return color[a.name] - color[b.name]
})

console.log('list', list)
