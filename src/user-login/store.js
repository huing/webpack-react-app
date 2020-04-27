import {observable, action} from 'mobx'

class Store {
  @observable loading = false
  @observable adminName = ''
  @action setLoading = boolean => {
    this.loading = boolean
  }
  @action updateName = name => {
    this.adminName = name
  }
}
export default Store
// export default new Store()
