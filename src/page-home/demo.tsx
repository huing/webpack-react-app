import React from 'react'

// 接口泛型
interface Profile<T> {
  age: T
}
type ProfileWithAge = Profile<string>

// 类型别名泛型
type Profile1<T> = {
  age: T
}
type ProfileWithAge1 = Profile1<string>

// 泛型就是类型的函数
// 默认类型参数,放最后
function name<T, D, U = number>(info: T[], list: Array<D>, profile: U): T[] {
  console.log(info.length)
  console.log(profile)
  console.log(list)
  return info
}

const demo = () => {
  name<string, string, string>(['hello', 'world'], ['a', 'b'], 'tuture')
  // 匿名函数泛型
  const getInfo1: <T, U extends Profile<string>>(info: T[], profile: U) => T[] = (
    info,
    profile,
  ) => {
    console.log(info.length)
    console.log(profile)

    return info
  }
  getInfo1(['hello', 'world'], { age: '1' })
  return <div>content</div>
}

export default demo

class Animal {
  name: string

  static isAnimal(a: Animal): boolean {
    return a instanceof Animal
  }

  constructor(name: string) {
    this.name = name
  }

  move(distance: number) {
    console.log(`Animal moved ${distance}m.`)
  }
}
