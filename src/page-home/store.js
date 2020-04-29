import {action, runInAction, observable} from 'mobx'
import BaseStore from '@components/BaseTable/store'
import Api from '../api'

class Store extends BaseStore {
  $listApi = Api.findOrderList
  $ignoreParams = [
    'search_type',
    'keywords',
  ]
  $getParams = () => {
    const {
      search_type,
      keywords,
      created_at,
      delivery_at,
      sort_rule,
      cityCode,
      ...rest
    } = this.$params
    return {
      [search_type]: keywords,
      ...rest
    }
  }
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
