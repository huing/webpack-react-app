import {observable} from 'mobx'

class Chart {
  @observable LockCount = [{
    lockCount: 1, 
    month: '2018-07',
  }, {
    lockCount: 1, 
    month: '2018-08',
  }, {
    lockCount: 61, 
    month: '2018-09',
  }, {
    lockCount: 16, 
    month: '2018-10',
  }, {
    lockCount: 17, 
    month: '2018-11',
  }, {
    lockCount: 71, 
    month: '2018-12',
  }, {
    lockCount: 1, 
    month: '2019-01',
  }, {
    lockCount: 71, 
    month: '2019-02',
  }, {
    lockCount: 1, 
    month: '2019-03',
  }, {
    lockCount: 1, 
    month: '2019-04',
  }, {
    lockCount: 11, 
    month: '2019-05',
  }]
}

export default new Chart()
