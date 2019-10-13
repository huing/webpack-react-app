import ioContext from './io-context'

const Cats = params => ioContext.get('/cats', params)

const CatsDetail = params => ioContext.get('/cats/detail', params)

export default {
  Cats,
  CatsDetail,
}
