

import ioContext from './io-context'

export default {
  // 订单列表
  findOrderListApi: ioContext.get('/manageApi/order/findOrderList'),
  // 订单详情
  findOrderDetailApi: ioContext.get('/manageApi/order/findOrderDetail'),
  // 查询退款明细
  findRefundDetailApi: ioContext.get('/manageApi/order/findRefundDetail'),
  // 退换审核
  refundReviewApi: ioContext.post('/manageApi/order/refundReview'),
  // 退换货完成
  refundCompleteApi: ioContext.post('/manageApi/order/refundComplete'),
}
