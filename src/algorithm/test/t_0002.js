const data = {
  a: 'aaa',
  b: undefined,
  c: Symbol('dd'),
  fn: function () {
    return true
  },
}
console.log(JSON.stringify(data))
// debugger
