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

  render() {
    return (
      <Form 
        {...this.props} 
        store={store} 
        submit={this.handleSubmit}
      />
    )
  }
}
export default PageForm