### typeof

#### es6 7 种 数据类型

- number
- string
- boolean
- null
- undefined
- symbol
- object
  - array function regexp date

```javascript
typeof 0; // number
typeof "ss"; // string
typeof undefined; // undefined
typeof []; // object
typeof {}; // object
typeof function () {}; // function
//  null 被认为是对象的占位符,但从技术上来说，它仍然是原始值
typeof null; // object
```

#### Boolean false

```javascript
new Boolean() new Boolean(0) new Boolean(null) new Boolean('') new Boolean(false)
```

#### Boolean true

```javascript
new Boolean('string') new Boolean([]) new Boolean({}) new Boolean(true)
```

#### 类型判断

```javascript
let arr = []
let obj = {}
// Object.prototype.toString.call(arr)的简写
toString.call([]) // "[object Array]" [].toString() // ""
toString.call({}) // "[object Object]" {}.toString() // 报错

[] instanceof Array //true
[] instanceof Object // true
[].constructor == Array //true
[].constructor === Object // false
JSON.stringify({})

if ({}.id) {}

Object.keys({}).length > 0
```

#### es6 6 种 声明变量的方法

var let const function import class
