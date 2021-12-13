function curry(fn) {
  console.log(1, arguments.length, fn.length)
  const args1 = [].slice.call(arguments, 1)
  return function curried(...args) {
    console.log(args, fn, args.length >= fn.length)
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
  // return function (...argets) {
  //   console.log(2, argets, arguments)
  //   return function (...argets1) {
  //     console.log(3, argets1, arguments)
  //     return function (...argets2) {
  //       console.log(4, argets2, arguments)
  //       // return f([...arguments, ...arguments])
  //     }
  //   }
  // }
}

function add(array) {
  console.log(array)
  console.log(array.reduce((acc, cur) => acc + cur, 0))
  return array.reduce((acc, cur) => acc + cur, 0)
}
const curriedSum = curry(add, 1, 2)
curriedSum(1, 2)(3)(4)

// // const sum = (num1, num2) => (num3) => {
// //     return num1 + num2 + num3
// // }

// const sum = (...rest) => (...rest1) => {
//     const ans = rest1.reduce((acc, cur) => {
//                 return acc += cur
//             }, 0)
//     return {
//         value: () => {

//             console.log(6)
//         }
//     }
// }

// // 实现函数sum，并通过sum(1,2)(3).value() 得到6

// sum().value()  ///6
