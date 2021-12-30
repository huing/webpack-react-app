/* 
  tuple 元组
  [string, number, string]
*/

/* 
  any: 可以进行赋值、实例化、函数执行等操作
  unknown: 只允许赋值，不允许实例化、函数执行等操作
  never: 一般用于给函数进行类型声明，函数绝不会有返回值的时候使用
*/

/* 
  函数重载
*/

/* 
  交叉类型 &
  联合类型 ｜
  联合类型 vs 枚举类型 ？
*/

/* 
  数字字面量
  字符串字面量
*/

/* 
  类型守卫
*/

/* 
  类型别名
*/

// 注解构造函数
class Profile<T> {
  username: string | undefined
  nickName: string | undefined
  avatar: string | undefined
  age: T | undefined
}
class TutureProfile extends Profile<string> {
  github: string | undefined
  remote: string[] | undefined
}
interface ConstructorFunction<C> {
  new (): C
}
function createInstance<A extends Profile<string>>(B: ConstructorFunction<A>) {
  return new B()
}
const myTutureProfile = createInstance(TutureProfile)

// const profileConstructor: ConstructorFunction<Profile<string>> = Profile
