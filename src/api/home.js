import ioContext from './io-context'

const Hello = params => ioContext.post('/users', params)
const Cats = params => ioContext.get('/cats', params)
const CatsDetail = params => ioContext.get('/cats/detail', params)

export default {
  Hello,
  Cats,
  CatsDetail,
}
