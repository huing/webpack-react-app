import {observable} from 'mobx'

class Store {
  @observable values = {
    // apiName: 'APIName',
    // apiGroup: 'APIGroup',
    // http: 'POST',
    // json: 'JSON',
    // depEnv: '部署环境',
    // desc: '描述',
    // count: 1498,
  }

  @observable depEnvData = [{
    id: 1,
    value: 'abc',
  }, {
    id: 2,
    value: 'eddd',
  }, {
    id: 3,
    value: 'ghhjk',
  }]

  @observable formData = [{
    label: '111',
    decorator: 'a1',
    rules: [{
      required: true,
      message: '请输入次数',
    // }, {
    //   validator: (rule, value, callback) => {
    //     if (value && value > 1500) {
    //       callback('单用户每秒调用次数不超过1500次')
    //     } else {
    //       callback()
    //     }
    //   },
    }],
    comp: 'Input',
  }, {
    label: '222',
    decorator: 'a2',
    rules: [{
      required: true,
      message: '请输入次数',
    }],
    comp: 'Select',
  }]
}

export default new Store()
