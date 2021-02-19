

import ioContext from './io-context'

export default {
  // 保存成员
  saveSysUserApi: ioContext.post('/manageApi/user/saveSysUser'),
  // 登录
  loginApi: ioContext.post('/manageApi/user/login'),
  // 登出
  logoutApi: ioContext.post('/manageApi/user/logout'),
  // 成员列表查询
  findSysUserListApi: ioContext.get('/manageApi/user/findSysUserList'),
  // 删除成员
  delSysUserApi: ioContext.post('/manageApi/user/delSysUser'),
}
