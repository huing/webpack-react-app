import {action, runInAction, observable} from 'mobx'
import BaseStore from '@components/BaseTable/store'
import Api from '../api'

console.log('--------', BaseStore)

class Store extends BaseStore {
  @observable detail = {}
  @action init = () => {
    this.getDetail()
  }
  @action getDetail = async () => {
    const data = await Api.Hello({

    })
    runInAction(() => {
      this.detail = data || {}
    })
  }
}
export default new Store()
