import {action, runInAction, observable} from 'mobx'
import {Modal, message} from 'antd'
import BaseStore from '@components/BaseTable/store'
import Api from '../api'

class Store extends BaseStore {
  $listApi = Api.findSysUserListApi
  @observable modalInfo = {}
  @observable visible = false
  $getParams = () => {
    return this.$params
  }
  @action init = () => {

  }
  @action toggleModal = (type, info) => {
    runInAction(() => {
      this.modalInfo = info || {}
      this[type] = !this[type]
    })
  }
  @action delete = (id) => {
    Modal.confirm({
      title: '确定删除成员？',
      onOk: async () => {
        await Api.delSysUserApi({id})
        message.success('操作成功')
      }
    })
  }
  @action save = async value => {
    console.log(value)
    await Api.saveSysUserApi({
      id: this.modalInfo.id || '',
      ...value
    })
    this.toggleModal('visible')
    this.$getList()
  }
}
export default new Store()
