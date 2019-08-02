import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {observable, action, toJS, autorun, runInAction} from 'mobx'

import './index.styl'

console.log(typeof 0)
console.log(typeof 'ss')
console.log(typeof undefined)

console.log(typeof null)
console.log(typeof [])

console.log(typeof {})
console.log(typeof new Map())

const todoStore = observable({
  /* 一些观察的状态 */
  todos: [],
  /* 推导值 */
  get completedCount() {
    return this.todos.filter(todo => todo.completed).length
  },
})

const map = observable({
  obj: {
    a: 'aValue',
    b: 'bValue',
  },
})
autorun(() => {
  // console.log(' %s vs %s ',
  //   Object.keys(map).toString(),
  //   Object.values(map).toString())

  console.log(toJS(map))
})
autorun(() => {map.obj.c = 'cValue'})

// map.obj.c = 'hahahah'

map.obj = {...map.obj, d: 'dValue'}
map.obj = Object.assign({}, map.obj, {e: 'eValue'})

/* 观察状态改变的函数 */
autorun(() => {
  // console.log('Completed %d of %d items',
  //   todoStore.completedCount,
  //   todoStore.todos.length)
  console.log(toJS(todoStore))
})

/* ..以及一些改变状态的动作 */
todoStore.todos[0] = {
  title: 'Take a walk',
  completed: false,
}
// -> 同步打印 'Completed 0 of 1 items'

todoStore.todos[0].completed = true
// -> 同步打印 'Completed 1 of 1 items'


@observer 
class DemoHome extends Component {
  @observable array = []

  @observable object = {}

  @observable num1 = undefined

  @observable num2 = null

  render() {
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
        <div>useContext</div>
      </div>
    )
  }
}
export default DemoHome
