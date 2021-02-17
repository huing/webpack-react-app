import {action, runInAction, observable} from 'mobx'
import Api from '../api'

class Store {
  @observable detailInfo = {}
  @observable id = ''
  @observable visible = false

  @action init = (id) => {
    runInAction(() => {
      this.id = id
    })
    this.getDetail()
  }
  @action getDetail = async () => {
    const data = await Api.findOrderDetailApi({orderId: this.id})
    runInAction(() => {
      this.detailInfo = data || {}
    })
  }
  @action toggleModal = type => {
    runInAction(() => {
      this[type] = !this[type]
    })
  }
}
export default new Store()
