import React from 'react'
import {observer} from 'mobx-react'
import {action} from 'mobx'
import Form from './form'
import store from './store'

import './index.styl'

@observer 
class PageForm extends React.Component {
  @action handleSubmit = values => {
    console.log('ok', values)
  }

  componentDidMount() {
    setTimeout(() => {
      store.values = {
        apiName: 'APIName',
        apiGroup: 'APIGroup',
        http: 'POST',
        json: 'JSON',
        depEnv: '部署环境',
        desc: '描述',
        count: 1498,
      }
    }, 3000)
  }

  render() {
    return (
      <Form 
        {...this.props} 
        values={store.values || {}} 
        depEnvData={store.depEnvData || []}
        formData={store.formData || []}
        submit={this.handleSubmit}
      />
    )
  }
}
export default PageForm