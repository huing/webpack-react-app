import {action, runInAction, observable} from 'mobx'
import BaseStore from '@components/BaseTable/store'
import { getMomentTime } from '@util'
import Api from '../api'

class Store extends BaseStore {
  $listApi = Api.findOrderList
  $ignoreParams = []
  $getParams = () => {
    const {
      createdDate,
      ...rest
    } = this.$params

    const [createDateLeft, createDateRight] = createdDate || []
    return {
      createDateLeft: createDateLeft && getMomentTime(createDateLeft, 0) + ' 00:00:00',
      createDateRight: createDateRight && getMomentTime(createDateRight, 1) + ' 23:59:59',
      ...rest
    }
  }
  @observable tab = ''
  @action changeTab = key => {
    runInAction(() => {
      this.tab = key
      this.$getList(1)
    })
  }
  @observable detail = {}
  @action init = () => {
    // this.getDetail()
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
