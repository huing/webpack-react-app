import {observable, action} from 'mobx'

class Root {
  @observable mInfo = {
    name: '',
  }

  static a = 'aaaa'

  @observable loading = false
  @action updateName = name => {
    this.mInfo.name = name
  }
  @action setLoading = boolean => {
    this.loading = boolean
  }
}

export default new Root()
