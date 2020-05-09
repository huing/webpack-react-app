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
  @action toggleModalSpu = () => {
    runInAction(() => {
      this.visibleSpu = !this.visibleSpu
    })
  } 
  @action toggleModal = info => () => {
    runInAction(() => {
      this.modalDetail = info || {}
      this.visibleSku = !this.visibleSku
    })
  }
  @action okSpu = async () => {

  }
  @action okSku = async () => {
    
  }
}
export default Store
