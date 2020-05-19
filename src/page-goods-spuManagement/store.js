import {action, runInAction, observable} from 'mobx'
import BaseStore from '@components/BaseTable/store'
import Api from '../api'

class Store extends BaseStore {
  $listApi = Api.findOrderList
  $ignoreParams = []
  @observable modalDetail = {}
  @observable visibleSku = false
  @observable visibleSpu = false
  $getParams = () => {
    return this.$params
  }
  @action init = () => {

  }
  @action toggleModal = (type, info) => {
    runInAction(() => {
      this[type] = !this[type]
      this.modalDetail = info || {}
    })
  }
  @action okSpu = async () => {

  }
  @action okSku = async () => {
    
  }
}
export default Store
