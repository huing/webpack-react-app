import {action, runInAction, observable} from 'mobx'
import moment from 'moment'
import BaseStore from '@components/BaseTable/store'
import Api from '../api'

class Store extends BaseStore {
  $listApi = Api.findOrderListApi
  $ignoreParams = []
  @observable modalDetail = {}
  @observable detailInfo = {}
  @observable activeTAb = ''
  @observable visible = false
  $getParams = () => {
    const {
      createdDate,
      ...rest
    } = this.$params

    const [createDateLeft, createDateRight] = createdDate || []
    return {
      createDateLeft: createDateLeft && moment(createDateLeft).format('YYYY-MM-DD'),
      createDateRight: createDateRight && moment(createDateRight).format('YYYY-MM-DD'),
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
  @action init = async () => {
    // const data = await Api.apiTags()
    // console.log('apiTags---------', data)
  }
  @action toggleModal = info => {
    runInAction(() => {
      this.modalDetail = info || {}
      this.visible = !this.visible
      if (this.visible) {
        this.getDetail()
      }
    })
  }
  @action getDetail = async () => {
    const data = await Api.findRefundDetailApi({orderId: this.modalDetail.id})
    runInAction(() => {
      this.detailInfo = data || {}
    })
  }
}
export default new Store()
