import {action, runInAction, observable} from 'mobx'
import { message } from 'antd'
import BaseStore from '@components/BaseTable/store'
import Api from '../api' 

class Store extends BaseStore {
  $listApi = Api.findSpuListApi
  $ignoreParams = []
  @observable modalDetail = {}
  @observable visibleSku = false
  @observable visibleSpu = false
  @observable catList = []
  @observable detailInfo = {}
  $getParams = () => {
    return this.$params
  }
  @action init = () => {
    this.getSpuCatList()
  }
  @action getSpuCatList = async() => {
    const data = await Api.findSpuCatListApi()
    runInAction(() => {
      this.catList = data || []
    })
  }
  @action getDetailInfoSpu = async() => {
    const data = await Api.findSpuDetailApi({spuId: this.modalDetail.id})
    runInAction(() => {
      this.detailInfo = data || {}
    })
  }
  @action getDetailInfoSku = async() => {
    const data = await Api.findSkuDetailApi({skuId: this.modalDetail.id})
    runInAction(() => {
      this.detailInfo = data || {}
    })
  }
  @action toggleModal = (type, info) => {
    runInAction(() => {
      this[type] = !this[type]
      this.modalDetail = info ? info : {}
      this.detailInfo = {}
      if (type === 'visibleSpu' && this[type] && info) {
        this.getDetailInfoSpu()
      }
      if (type === 'visibleSku' && this[type] && info && !info['addSku']) {
        this.getDetailInfoSku()
      }
    })
  }
  @action okSpu = async (params) => {
    await Api.saveSpuApi(params)
    this.toggleModal('visibleSpu')
    message.success('操作成功')
    this.$getList()
  }
  @action okSku = async (params) => {
    await Api.saveSkuApi(params)
    this.toggleModal('visibleSku')
    message.success('操作成功')
    this.$getList()
  }
  @action deleteSpu = async id => {
    await Api.delSpuApi({id})
    message.success('操作成功')
    this.$getList()
  }
  @action deleteSku = async id => {
    await Api.delSkuApi({id})
    message.success('操作成功')
    this.$getList()
  }
}
export default Store
