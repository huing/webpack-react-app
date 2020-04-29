import ioContext from './io-context'

const findOrderList = ioContext.get('/order/findOrderList')
const Cats = ioContext.get('/cats')
const CatsDetail = ioContext.get('/cats/detail')

export default {
  findOrderList,
  Cats,
  CatsDetail,
}
