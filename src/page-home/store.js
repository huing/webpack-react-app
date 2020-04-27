import {action, runInAction, observable} from 'mobx'
import Api from '../api'

class Store {
  @observable detail = {}
  @action init = () => {
    this.getDetail()
  }
  getDetail = async () => {
    const data = await Api.Hello({

    })
    runInAction(() => {
      this.detail = data || {}
    })
  }
}
export default new Store()
