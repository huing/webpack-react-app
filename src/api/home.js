import ioContext from './io-context'

const Hello = ioContext.post('/users')
const Cats = ioContext.get('/cats')
const CatsDetail = ioContext.get('/cats/detail')

export default {
  Hello,
  Cats,
  CatsDetail,
}
