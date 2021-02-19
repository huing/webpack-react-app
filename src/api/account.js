import ioContext from './io-context'

export default {
  // 提现列表查询
  findCwdListApi: ioContext.get('/manageApi/account/findCwdList'),
  // 提现审核
  cwdReviewApi: ioContext.post('/manageApi/account/cwdReview'),
}
