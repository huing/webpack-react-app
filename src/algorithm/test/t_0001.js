var a = function () {
  this.b = 3
}
// console.log(b)
var c = new a()
// console.log(b)
a.prototype.b = 10
// console.log(b)
var b = 7
// console.log(b)
a()

console.log(b)

console.log(c.b)
