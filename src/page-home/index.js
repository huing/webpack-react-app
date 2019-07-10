import React, {Component} from 'react'
import {observer} from 'mobx-react'

import './index.styl'


@observer 
class DemoHome extends Component {
  render() {

    const a = ['a'],
      b = 's',
      c = 0

    console.log(a, b, c)

    return (
      <div className="demo-home">
        <div>1. 侧边栏 固定值 收缩</div>
        <div>2. 日期</div>
        <div>3. 正则表达式</div>
        <div>4. 深拷贝</div>
        <div>
          <a 
            href="https://github.com/Advanced-Frontend/Daily-Interview-Question"
            target="blank"
          >
            前端
          </a>
        </div>
        
      </div>
    )
  }
}
export default DemoHome
/* eslint-disable */

function mixins(...list) {
  return function(target) {
    Object.assign(target.prototype, ...list)
  }
}

function readonly(target, name, descriptor) {
  descriptor.writable = true 
  return descriptor
}

function nonenumerable(target, name, descriptor) {
  console.log(target, name, descriptor)
  descriptor.enumerable = false 
  console.log(target, name, descriptor)
  return descriptor
}

function log(target, name, descriptor) {
  var oldValue = descriptor.value

  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments)
    return oldValue.apply(this, arguments)
  }

  return descriptor
}


const Foo = {
  foo() {
    console.log('foo')
  },
}

@mixins(Foo)
class Person {
  constructor(props) {
    this.rt = 1
    this.fg = 2
    this.children = [1, 2, 3]
  }

  first = 1
  last = 2

  @readonly
  ss() {
    return `${this.first} ${this.last}`
  }

  @nonenumerable
  get kidCount() {
    this.children.map(item => console.log(item))
    return this.children.length
  }


  @log 
  add(a, b) {
    return a + b
  }
}

let obj = new Person()

// console.log(Object.getOwnPropertyDescriptors(Person))
console.log(obj.kidCount, obj.add(2, 4))

