import ioContext from './io-context'

export default {
  // 获取七牛上传token
  getQiniuTokenApi: ioContext.get('/manageApi/common/getQiniuToken?key=1'),
  // 获取指定类型的字典码
  findSysCodeApi: ioContext.get('/manageApi/common/findSysCode'),

  // apiTags: ioContext.get('/mock/api/tags'),
}
