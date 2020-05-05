import {action, runInAction, observable} from 'mobx'
import BaseStore from '@components/BaseTable/store'
import { getMomentTime } from '@util'
import Api from '../api'

class Store extends BaseStore {
  $listApi = Api.findOrderList
  $ignoreParams = []
  @observable modalDetail = {}
  @observable activeTAb = ''
  @observable visible = false
  $getParams = () => {
    const {
      createdDate,
      ...rest
    } = this.$params

    const [createDateLeft, createDateRight] = createdDate || []
    return {
      createDateLeft: createDateLeft && getMomentTime(createDateLeft, 0) + ' 00:00:00',
      createDateRight: createDateRight && getMomentTime(createDateRight, 1) + ' 23:59:59',
      status: this.activeTAb,
      ...rest
    }
  }
  @action changeTab = key => {
    runInAction(() => {
      this.activeTAb = key
      this.$getList(1)
    })
  }
  @action init = () => {

  }
  @action toggleModal = info => () => {
    runInAction(() => {
      this.modalDetail = info || {}
      this.visible = !this.visible
    })
  }
}
export default new Store()
