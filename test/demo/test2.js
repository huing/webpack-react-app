function generateMessage(template, data) {
  return template.replace(/\${(.*?)\}/g, (match, key) => data[key.trim()])
}

const template =
  '亲爱的${username}，中秋大促~，送你一张${coupon}优惠券，你感兴趣的${sku1} 和${sku2} 都能用！'

const data = {
  username: '小橘子',
  coupon: '12元',
  sku1: '冰鲜澳洲牛腩500g',
  sku2: '鲜鸡蛋（草鸡蛋）8枚400g',
}

const message = generateMessage(template, data)
console.log(message)
// message === "亲爱的小橘子，中秋大促~，送你一张12元优惠券，你感兴趣的冰鲜澳洲牛腩500g 和鲜鸡蛋（草鸡蛋）8枚400g 都能用！"
