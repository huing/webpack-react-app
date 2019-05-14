import React, {Component} from 'react'
import {observer} from 'mobx-react'
import './index.styl'
import {formatMessage} from '../locales'


// function batches(recipe, available) {
//   console.log(Object.keys(recipe))
//   const a = Object.keys(recipe).map(k => {
//     console.log(k, available[k], recipe[k])
//     return available[k] / recipe[k] || 0
//   })

//   console.log(a)
//   const b = Math.min(...a)
//   console.log(b)
//   const c = Math.floor(b)
//   console.log(c)
// }

// batches(
//   {milk: 100, butter: 50, flour: 5},
//   {milk: 132, butter: 48, flour: 51}
// )

// let i = 0 , j = 0
// // i++
// // ++j
// console.log(i++, i, ++j, j)

// const bind = (fn, context) => (...args) => fn.apply(context, args)

// function example() {
//   console.log(this)
// }
// const boundExample = bind(example, {a: true})
// boundExample.call({b: true}) // logs { a: true }

// console.log(Math.min(...[1,2,3,4], 2))

@observer 
class DemoHome extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="demo-home">
        干啥！
        <div>
          {formatMessage({id: 'hhh'})}
        </div>
      </div>
    )
  }
}
export default DemoHome


// // 使用slice方法从myCar中创建一个newCar.
// var myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}
// var myCar = [myHonda, 2, "cherry condition", "purchased 1997"]
// var newCar = myCar.slice(0, 2)

// // 输出myCar, newCar,以及各自的myHonda对象引用的color属性.
// console.log('myCar = ' + JSON.stringify(myCar))
// console.log('newCar = ' + JSON.stringify(newCar))
// console.log('myCar[0].color = ' + JSON.stringify(myCar[0].color))
// console.log('newCar[0].color = ' + JSON.stringify(newCar[0].color))

// // 改变myHonda对象的color属性.
// myHonda.color = 'purple'
// console.log('The new color of my Honda is ' + myHonda.color)

// //输出myCar, newCar中各自的myHonda对象引用的color属性.
// console.log('myCar[0].color = ' + myCar[0].color)
// console.log('newCar[0].color = ' + newCar[0].color)

// newCar.push('a')
// console.log('myCar = ' + JSON.stringify(myCar))
// console.log('newCar = ' + JSON.stringify(newCar))

// function Product(name, price) {
//   console.log(this)
//   this.name = name
//   this.price = price
// }

// function Food(name, price) {
//   console.log(this)
//   Product.call(this, name, price)
//   this.category = 'food'
// }

// var cheese = new Food('feta', 5)
// console.log(cheese, cheese)

// var animals = [
//   {species: 'Lion', name: 'King'},
//   {species: 'Whale', name: 'Fail'},
// ]

// for (var i = 0; i < animals.length; i++) {
//   (function(i) {
//     // console.log(this)
//     this.print = function() {
//       console.log('#' + i + ' ' + this.species + ': ' + this.name)
//     }
//     this.print()
//     // console.log(this)

//   }).call(animals[i], i)
// }

// function greet(objj) {
//   console.log(this, objj)
//   var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ')
//   console.log(reply)
//   console.log(this)
// }


// function a() {
//   var obj = {
//     animal: 'cats', sleepDuration: '12 and 16 hours',
//   }

//   greet.call(this, obj)
// }

// new a()

