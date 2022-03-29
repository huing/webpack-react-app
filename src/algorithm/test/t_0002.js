const data = {
  a: 'aaa',
  b: undefined,
  c: Symbol('dd'),
  fn: function () {
    return true
  },
}
console.log(JSON.stringify(data))

console.log(
  JSON.stringify([
    'aaa',
    undefined,
    function aa() {
      return true
    },
    Symbol('dd'),
  ]),
)

JSON.stringify(function a() {
  console.log('a')
})
// undefined
console.log(JSON.stringify(undefined))
// undefined
JSON.stringify(Symbol('dd'))
// undefined
JSON.stringify([
  'aaa',
  undefined,
  function aa() {
    return true
  },
  Symbol('dd'),
  'eee',
]) // 输出：？

// "["aaa",null,null,null,"eee"]"
