
/* eslint-disable */
import axios from 'axios'
import qs from 'qs'

let baseURL = ''
if (process.env.NODE_ENV === 'development') {
  // baseURL = 'http://120.26.119.23:8090/web/'
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'https://hotel.sciener.cn/'
}

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    get: {

    },
    language: (window.g_lang || 'zh-CN').split('-')[0]
  },
  transformRequest: [data => qs.stringify(data)],
})

const requestList = []
const CancelToken = axios.CancelToken
let cancels = {}

instance.interceptors.request.use(function (config) {

  const request = [JSON.stringify(config.url), JSON.stringify(config.params), JSON.stringify(config.data)].join('')
  config.cancelToken = new CancelToken(cancel => {
    cancels[request] = cancel
  })

  if(requestList.includes(request)){
    cancels[request]('取消重复请求')
  } else {
    requestList.push(request)
  }
  // Do something before request is sent 在发送请求之前做些什么
  return config
}, function (error) {
  // Do something with request error 对请求错误做些什么
  return Promise.reject(error)
})



// Add a response interceptor 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // Do something with response data 对响应数据做点什么
  return response
}, function (error) {
  // Do something with response error 对响应错误做点什么
  return Promise.reject(error)
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

const ajax = options => new Promise((resolve, reject) => {
  instance(options, resolve).then(response => {
    resolve(response.data)
    // console.log(response)
    if (response.status !== 200) {
      const errortext = codeMessage[response.status] 
      const {status, url} = response
      console.log(`请求错误 ${status}: ${url}`, errortext)
    } 
    // return response.data
  })
  .catch(error => console.log(error))
})

export default ajax