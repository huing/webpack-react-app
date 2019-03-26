import * as APITools from './common'


// 图片
export const getCompanyInfo = (params, lang = 'zh') => {
  // let domainName = document.domain
  let domainName = window.location.host
  if (domainName.indexOf('hotel.ttlock.tech') > -1) {
    domainName = 'hotel.ttlock.tech'
  } else if (domainName.indexOf('hotel.sciener.tech') > -1) {
    domainName = 'hotel.sciener.tech'
  } else {
    domainName = 'hotel.sciener.cn'
  }
  return APITools.$getIcon('/login/getCompanyInfo', {domainName}, lang)
}

// 手机号前缀
export const batchDelete = (params, lang = 'zh') => (APITools.$post('/key/batchDelete', params, lang))

// 手机号前缀
export const selectCountry = (params, lang = 'zh') => (APITools.$get('/basic/selectCountry', {}, lang))

// 查询租客是否已经办理的接口 
export const mobileIsRepetition = (params, lang = 'zh') => (APITools.$get('/tenant/mobileIsRepetition', params, lang))

// 查询酒店公共门接口
export const selectTheDoorList = (params, lang = 'zh') => (APITools.$get('/door/selectTheDoorList', params, lang))

// 查询酒店带锁房门接口
export const selectDoorList = (params, lang = 'zh') => (APITools.$get('/door/selectDoorList', params, lang))

// 发钥匙接口
export const sendKey = (params, lang = 'zh') => (APITools.$post('/key/sendKey', params, lang))

// 发送密码接口
export const pwdAdd = (params, lang = 'zh') => (APITools.$post('/pwd/pwdAdd', params, lang))

// 密码发送短信接口
export const pwdSendNote = (params, lang = 'zh') => (APITools.$post('/pwd/pwdSendNote', params, lang))

// 房客办卡
export const tenantAddCard = (params, lang) => (APITools.$post('/card/tenantAdd', params, lang))

/* 首页 */

// 消息列表
export const HomeSelect = (params, lang) => (APITools.$get('/message/select', params, lang))

// 查询未查看消息条数
export const selectMessageCount = (params, lang = 'zh') => (APITools.$get('/basic/selectMessageCount', params, lang))

// 修改消息为已查看接口
export const updateMessageFlag = (params, lang = 'zh') => (APITools.$post('/basic/updateMessageFlag', params, lang))

/* 员工管理 */

// 卡列表退卡
export const returnCardNumber = (params, lang) => (APITools.$post('/card/returnCardNumber', params, lang))

// 卡列表续卡
export const continuationCardNumber = (params, lang) => (APITools.$post('/card/continuationCardNumber', params, lang))

// 查卡接口
export const cardNumberSelect = (params, lang = 'zh') => (APITools.$get('/card/cardNumberSelect', params, lang))
 
// 删除卡
export const CardDel = (params, lang = 'zh') => (APITools.$post('/card/delete', params, lang)) 
 
// 挂失
export const reportLossCard = (params, lang = 'zh') => (APITools.$post('/card/reportLossCard', params, lang))
 
// 卡列表
export const CardSelect = (params, lang = 'zh') => (APITools.$get('/card/select', params, lang)) 

/* 房间管理 */

export const DoorAdd = (params, lang) => (APITools.$post('/door/add', params, lang))  

export const DoorDel = (params, lang) => (APITools.$post('/door/delete', params, lang)) 

export const DoorUpdate = (params, lang) => (APITools.$post('/door/update', params, lang))

/* 房间详情 */

// 选择房间列表
export const DoorSelect = (params, lang) => (APITools.$get('/door/select', params, lang)) 

// 选择某一个房间
export const selectDoor = (params, lang) => (APITools.$get('/door/selectDoor', params, lang)) 

// 开门记录
export const lockRecords = (params, lang = 'zh') => (APITools.$get('/lock/lockRecords', params, lang)) 

// 密码
export const sendPwdRecord = (params, lang = 'zh') => (APITools.$get('/pwd/sendPwdRecord', params, lang)) 

// IC卡列表
export const sendCardRecord = (params, lang = 'zh') => (APITools.$get('/lock/sendCardRecord', params, lang)) 

/* header */

// 修改手机号接口
export const updateMobile = (params, lang) => (APITools.$post('/staff/updateMobile', params, lang))

// 校验验证码是否正确
export const verifyCode = (params, lang = 'zh') => (APITools.$get('/staff/verifyCode', params, lang))

// 更换手机号发送验证码
export const updateSmsValidationCode = (params, lang = 'zh') => (
  APITools.$post('/staff/updateSmsValidationCode', params, lang) 
)

// 修改员工手机号发送验证码 备注：判断员工是否存在的
export const updateSmsCode = (params, lang = 'zh') => (
  APITools.$post('/staff/updateSmsCode', params, lang) 
)

// 旧密码换新密码接口
export const updatePwd = (params, lang = 'zh') => (APITools.$post('/staff/updatePwd', params, lang))

/* 智能锁列表 */

// 锁列表
export const LockSelect = (params, lang) => (APITools.$get('/lock/select', params, lang))

// 加入回收站
export const LockDel = (params, lang) => (APITools.$post('/lock/addRecycleBin', params, lang))

// 锁详情
export const LockParticulars = (params, lang) => (APITools.$get('/lock/particulars', params, lang))

// 查询锁下的卡列表
// export const sendCardRecord = (params, lang) => (APITools.$get('/lock/sendCardRecord', params, lang)) 

// 查询锁操作记录
// export const lockRecords = (params, lang) => (APITools.$get('/lock/lockRecords', params, lang)) 

// 绑定智能锁接口
export const BindDoor = (params, lang) => (APITools.$post('/lock/bindingLock', params, lang))

// 解绑智能锁接口
export const UnBindDoor = (params, lang) => (APITools.$post('/lock/untieLock', params, lang))

// 查询锁操作记录
export const selectIsLockIdToNull = (params, lang) => (APITools.$get('/door/selectIsLockIdToNull', params, lang)) 

/* 员工管理 */

export const StaffAdd = (params, lang) => (APITools.$post('/staff/add', params, lang))

export const StaffDel = (params, lang) => (APITools.$post('/staff/delete', params, lang))

export const StaffUpdate = (params, lang) => (APITools.$post('/staff/update', params, lang))

// 员工办卡
export const StaffCard = (params, lang) => (APITools.$post('/card/stafffAdd', params, lang))

// 员工列表
export const StaffSelect = (params, lang) => (APITools.$get('/staff/select', params, lang))

// 基本信息 
export const StaffParticulars = (params, lang) => (APITools.$get('/staff/particulars', params, lang))

// 持卡信息 
export const StaffCardSelect = (params, lang = 'zh') => (APITools.$get('/staff/selectCardToStaffId', params, lang)) 

// 钥匙信息
export const StaffKeysSelect = (params, lang) => (APITools.$get('/staff/selectKeyToStaffId', params, lang))

// 员工详情
export const particulars = (params, lang) => (APITools.$get('/staff/particulars', params, lang))

/* 系统设置 */
 
// 查询酒店信息， 名称，地址
export const HotelSelect = (params, lang) => (APITools.$get('/hotel/select', params, lang))

// 删除酒店
export const HotelDel = (params, lang) => (APITools.$post('/hotel/delete', params, lang))

// 编辑酒店
export const HotelUpdate = (params, lang) => (APITools.$post('/hotel/update', params, lang))

// 新增楼栋
export const BuildingAdd = (params, lang) => (APITools.$post('/building/add', params, lang))

// 更新楼栋
export const BuildingUpdate = (params, lang) => (APITools.$post('/building/update', params, lang))

// 删除楼栋
export const BuildingDel = (params, lang) => (APITools.$post('/building/delete', params, lang)) 

// 楼栋查询
export const BuildingSelect = (params, lang) => (APITools.$get('/building/select', params, lang)) 

export const FloorAdd = (params, lang) => (APITools.$post('/floor/add', params, lang))

export const FloorDel = (params, lang) => (APITools.$post('/floor/delete', params, lang))

export const FloorSelect = (params, lang) => (APITools.$get('/floor/select', params, lang)) 

// 新增岗位
export const PostAdd = (params, lang) => (APITools.$post('/post/add', params, lang))  

// 删除岗位
export const PostDel = (params, lang) => (APITools.$post('/post/delete', params, lang)) 

// 更新岗位
export const PostUpdate = (params, lang) => (APITools.$post('/post/update', params, lang))

// 查询岗位
export const PostSelect = (params, lang) => (APITools.$get('/post/select', params, lang)) 

/* 租客管理 */

export const Tenantselect = (params, lang) => (APITools.$get('/tenant/select', params, lang))

// 房客办卡
export const TenantCard = (params, lang) => (APITools.$post('/card/tenantAdd', params, lang))

/* 登录 注册 */

export const login = (params, lang = 'zh') => (APITools.$post('/login/select', params, lang))  

export const register = (params, lang = 'zh') => (APITools.$post('/login/register', params, lang)) 

export const logout = (lang = 'zh') => (APITools.$postabs('/logout', {}, lang)) 

// 修改密码
export const updatePw = (params, lang = 'zh') => (APITools.$post('/login/updatePassword', params, lang))

// 注册酒店 发送短信验证码
export const BindsendSmsValidationCode = (params, lang = 'zh') => (
  APITools.$post('/login/BindsendSmsValidationCode', params, lang)
)

// 登录修改密码 发送短信验证码
export const sendSmsValidationCode = (params, lang) => (APITools.$post('/login/sendSmsValidationCode', params, lang))
