import {action, runInAction, observable} from 'mobx'
import BaseStore from '@components/BaseTable/store'
import Api from '../api'
import moment from 'moment'

class Store extends BaseStore {
  $listApi = Api.findCwdListApi
  @observable modalInfo = {}
  @observable visible = false
  @observable detailVisible = false
  // $ignoreParams = ['createTime']
  $getParams = () => {
    const {
      createTime,
      ...rest
    } = this.$params
    console.log(this.$params)
    const [createTimeLeft, createTimeRight] = createTime || []
    return {
      createTimeLeft: createTimeLeft && moment(createTimeLeft).format('YYYY-MM-DD') + ' 00:00:00',
      createTimeRight: createTimeRight && moment(createTimeRight).format('YYYY-MM-DD') + ' 23:59:59',
      ...rest
    }
  }
  @action init = () => {

  }
  @action toggleModal = (type, info) => {
    runInAction(() => {
      this.modalInfo = info || {}
      this[type] = !this[type]
    })
  }
}
export default new Store()
