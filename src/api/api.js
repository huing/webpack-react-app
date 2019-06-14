import ajax from './ajax'

function login(data) {
  return ajax({
    url: '/api/login',
    method: 'post',
    headers: {
      'Authorization': 'SECRET',
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'Access-Control-Allow-Origin': '*',
    },
    data,
  })
}

export default {
  login,
}