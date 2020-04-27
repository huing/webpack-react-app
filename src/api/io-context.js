import axios from 'axios'
import qs from 'qs'
import {notification} from 'antd'

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

let baseURL = ''
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3006'
} 
 
const instance = axios.create({
  baseURL,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    get: {

    },
    language: (window.g_lang || 'zh-CN').split('-')[0],
  },
  transformRequest: [data => qs.stringify(data)],
})

instance.interceptors.request.use(config => {
  // console.log(789, config)
  // Do something before request is sent 在发送请求之前做些什么
  return config
}, error => {
  console.log(102, error)
  // Do something with request error 对请求错误做些什么
  return Promise.reject(error)
})
// Add a response interceptor 添加响应拦截器
instance.interceptors.response.use(response => {
  console.log(123, response)
  // Do something with response data 对响应数据做点什么
  if (response.status !== 200) {
    const errortext = codeMessage[response.status] 
    const {status, url} = response
    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errortext,
    })
    console.log(`请求错误 ${status}: ${url}`, errortext)
  } 
  return response.data
}, error => {
  console.log(456, error)
  // Do something with response error 对响应错误做点什么
  return Promise.reject(error)
  // return Promise.resolve(response: {
  //   data: {},
  //   status: 404,
  // })
})

const get = url => params => instance.get(url, {params})
const post = url => params => instance.post(url, params)

export default {
  get, 
  post, 
}
