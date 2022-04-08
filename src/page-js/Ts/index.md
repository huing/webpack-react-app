### 使用 is 类型保护

#### 类型保护的作用域仅仅在 if 后的块级作用域中生效

##### toExponential() 方法以指数表示法返回该数值字符串表示形式

```javascript
function isString(test: any): test is string {
  return typeof test === 'string'
}

function example(foo: any) {
  if (isString(foo)) {
    console.log('it is a string' + foo)
    console.log(foo.length) // string function
    // 如下代码编译时会出错，运行时也会出错，因为 foo 是 string 不存在 toExponential 方法
    console.log(foo.toExponential(2))
  }
  // 编译不会出错，但是运行时出错
  console.log(foo.toExponential(2))
}
example('hello world')
```

### 返回值为 boolean

```javascript
function isString(test: any): boolean {
  return typeof test === 'string';
}

function example(foo: any) {
  if (isString(foo)) {
    console.log('it is a string' + foo);
    console.log(foo.length); // string function
    // foo 为 any，编译正常。但是运行时会出错，因为 foo 是 string 不存在 toExponential 方法
    console.log(foo.toExponential(2));
  }
}
example('hello world');
```
