import {observable, action} from 'mobx'

class Root {
  @observable userInfo = {
    name: '',
  }

  static a = 'aaaa'

  @observable loading = false
  @action updateName = name => {
    this.userInfo.name = name
  }
  @action setLoading = boolean => {
    this.loading = boolean
  }
}

export default new Root()
