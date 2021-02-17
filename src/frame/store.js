import {observable, action} from 'mobx'

class Store {
  @observable loading = false
  @action setLoading = boolean => {
    this.loading = boolean
  }

  @observable mInfo = {
    name: '',
  }

  static a = 'aaaa'

  @action updateName = name => {
    this.mInfo.name = name
  }
}

export default new Store()
