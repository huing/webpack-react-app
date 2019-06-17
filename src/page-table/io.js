import ioContext from '../api/io-context'


function getDoor (params) {
  return ioContext({
    url: 'door/select',
    method: 'GET',
    params: params,
  })
}

function postDoor (params) {
  return ioContext({
    url: 'door/add',
    method: 'POST',
    data: params,
  })
}

export default {
  getDoor,
  postDoor,
}