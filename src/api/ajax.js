import axios from 'axios'
import {notification} from 'antd'

// import loginUtil from '../login'

// 默认配置
axios.defaults.method = 'post'
axios.defaults.withCredentials = true

const noNeedAuthAPI = [
  '/api/v1/captcha',
  '/api/v1/user/auth/captcha',
]

const MOCK = true

// 添加请求拦截器
axios.interceptors.request.use(config => {
  console.log(config)
  if (MOCK) {
    config.url = `http://yapi.demo.qunar.com/mock/71510${config.url}`
  } else {
    if (noNeedAuthAPI.indexOf(config.url) > -1) {
      return config
    }
    // const userInfo = loginUtil.getUserInfo()
    // if (userInfo && userInfo.token) {
    //   config.headers.common.Authorization = userInfo.token
    // } else {
    //   window.location.href = '/login'
    // }
  }
  // console.log('show request: ', config)
  return config
})

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}

const request = (options, resolve) => axios({...options}).then(response => {
  console.log('response', response)
  const data = response.data || {}
  resolve(data)

  if (data.code !== 200 && options.handle === false) {
    const errortext = codeMessage[response.status] || response.statusText
    const {status, url} = response
    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errortext,
    })
  }
}).catch(error => console.log(error))

const ajax = options => new Promise(resolve => request(options, resolve))

export default ajax

// // 判断origin是否在域名白名单列表中
// function isOriginAllowed(origin, allowedOrigin) {
//   if (_.isArray(allowedOrigin)) {
//     for(let i = 0; i < allowedOrigin.length; i++) {
//       if(isOriginAllowed(origin, allowedOrigin[i])) {
//         return true
//       }
//     }
//     return false
//   } else if (_.isString(allowedOrigin)) {
//     return origin === allowedOrigin
//   } else if (allowedOrigin instanceof RegExp) {
//     return allowedOrigin.test(origin)
//   } else {
//     return !!allowedOrigin
//   }
// }

// const ALLOW_ORIGIN = [  // 域名白名单
//   '*.233.666.com',
//   'hello.world.com',
//   'hello..*.com',
// ]

// ajax.post('a/b', function (req, res, next) {
//   let reqOrigin = req.headers.origin  // request响应头的origin属性
//   // 判断请求是否在域名白名单内
//   if(isOriginAllowed(reqOrigin, ALLOW_ORIGIN)) {
//     // 设置CORS为请求的Origin值
//     res.header("Access-Control-Allow-Origin", reqOrigin)
//     res.header('Access-Control-Allow-Credentials', 'true')

//     // 你的业务代码逻辑代码 ...
//     // ...
//   } else {
//     res.send({code: -2, msg: '非法请求'})
//   }
// })