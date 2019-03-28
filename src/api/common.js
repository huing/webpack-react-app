import qs from 'qs'
import axios from './axios'
import config from './config'

const isProduction = process.env.NODE_ENV === 'production'
const host = isProduction ? config.remoteHost : config.remoteHostDev
const absHost = isProduction ? config.remoteHostAbs : config.remoteHostAbsDev


export const $get = (url, params) => axios.get(
  `${host}${url}?timestamp=${(new Date()).getTime()}`, 
  {
    headers: {
      language: (window.g_lang || 'zh-CN').split('-')[0],
    }, 
    params: Object.assign({}, params, {
      hotelId: window.d_s.hotelId,
      language: (window.g_lang || 'zh-CN').split('-')[0],
    }),
  }
)
  .then(res => (res.data))


export const $getabs = (url, params) => {
  const lang = (window.g_lang || 'zh-CN').split('-')[0]
  return axios.get(`${absHost}${url}`, {headers: {language: lang}, params}).then(res => res.data)
} 

export const $post = (url, params) => {
  const lang = (window.g_lang || 'zh-CN').split('-')[0]
  return axios.post(`${host}${url}`, qs.stringify(params), 
    {
      headers: {
        language: lang,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res => res.data)
} 
// (
//   axios.post(`${host}${url}`, qs.stringify(params), 
//     {
//       headers: {
//         language: lang,
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     }).then(res => res.data)
// )

export const $postabs = (url, params = {}) => {
  const lang = (window.g_lang || 'zh-CN').split('-')[0]
  return axios.post(`${absHost}${url}`, qs.stringify(params), 
    {
      headers: {
        language: lang,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res => res.data)
}

export const $all = list => (
  axios.all(list).then(axios.spread((...results) => results))
) 
