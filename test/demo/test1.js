// function render(template, context) {
//   return template.replace(/\{|{(.*?)\}\}/g, (match, key) => context[key.trim()]);
// }

// const template = '{{name}}很厉害,才{{age}}岁'
// const context = {name: 'bottle', age: '15'}

// render(template, context)

// effects
// reducers

const map = {
  0: `00
         0
         0
         0
         0
         0
        000`,
  1: `0000000
           0
           0
           0
           0
           0
        0000000`,
  2: `0000000
              0
              0
        0000000
        0
        0
        0000000`,
  9: `0000000
         0     0
         0     0
         0000000
               0
               0
         0000000`,
}

function bigPrint(n) {
  // 在终端中通过 0 字符输出放大版的数字
  // YOUR CODE HERE
  const str = String(n).split('')
  let ans = ''
  for (let i = 0; i < str.length; i++) {
    ans += map[str[i]]
    // console.log('----', map[str[i]])
  }
  console.log(ans)
  // const str = ''
  // let num = n
  // while (num) {
  //     num = num %
  // }
  console.log(`
    00    0000000   0000000   0000000
     0    0     0         0   0     0
     0    0     0         0   0     0
     0    0     0   0000000   0000000
     0    0     0   0               0
     0    0     0   0               0
    000   0000000   0000000   0000000
   `)
}

call

// 示例
bigPrint(1029)
