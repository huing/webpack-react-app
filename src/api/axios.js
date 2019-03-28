import axios from 'axios'

axios.interceptors.response.use(response => {
  if (response.headers['content-type'].startsWith('text/html')) {
    console.log('response text/html', response.request)
    if (response.request.responseURL) {
      window.location.replace(response.request.responseURL)
    } else {
      window.location.replace('/login')
    }
    // console.log('response', response.request.responseURL) 
    // 重定向页面
    // window.location.replace(response.request.responseURL) 
  } 
  // console.log(response)
  return response
}, error => { 
  // console.log(error)
  if (error && error.response) {
    switch (error.response.status) {
      case 302:
        window.location.replace('/login')
        console.log('重定向') 
        break 
      case 400:
        console.log('请求错误') 
        break 
      case 401:
        window.location.replace('/login')
        console.log('未授权，请登录') 
        break 
      case 403:
        console.log('拒绝访问') 
        break 
      case 404:
        console.log(`请求地址出错: ${error.response.config.url}`)
        break
      case 408:
        console.log('请求超时') 
        break 
      case 500:
        console.log('服务器内部错误') 
        break 
      case 501:
        console.log('服务未实现') 
        break 
      case 502:
        console.log('网关错误') 
        break 
      case 503:
        console.log('服务不可用') 
        break 
      case 504:
        console.log('网关超时') 
        break 
      case 505:
        console.log('HTTP版本不受支持') 
        break 
      default:
        break 
    }
  }
  return Promise.reject(error)
})

export default axios
