

import ioContext from './io-context'

export default {
  // spu列表查询
  findSpuListApi: ioContext.get('/manageApi/spu/findSpuList'),
  // 保存spu
  saveSpuApi: ioContext.post('/manageApi/spu/saveSpu'),
  // 删除spu
  delSpuApi: ioContext.post('/manageApi/spu/delSpu'),
  // 保存sku
  saveSkuApi: ioContext.post('/manageApi/sku/saveSku'),
  // 删除sku
  delSkuApi: ioContext.post('/manageApi/sku/delSku'),
  // 查询分类数据
  findSpuCatListApi: ioContext.get('/manageApi/spuCat/findSpuCatList'),
  // spu详情查询
  findSpuDetailApi: ioContext.get('/manageApi/spu/findSpuDetail'),
  // sku详情查询
  findSkuDetailApi: ioContext.get('/manageApi/sku/findSkuDetail'),
}
