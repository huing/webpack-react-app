import * as APITools from './common'


/* 登录 注册 */

export const login = (params, lang = 'zh') => (APITools.$post('/login/select', params, lang))  

export const logout = (lang = 'zh') => (APITools.$postabs('/logout', {}, lang)) 
