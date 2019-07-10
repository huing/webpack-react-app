import {observable} from 'mobx'

class Store {
  @observable values = {
    // APIName: 'APIName',
    // APIGroup: 'APIGroup',
  }

  @observable depEnvDate = [{
    id: 1,
    value: 'abc',
  }, {
    id: 2,
    value: 'eddd',
  }, {
    id: 3,
    value: 'ghhjk',
  }]
}


export default new Store()