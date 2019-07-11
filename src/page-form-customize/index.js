import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {action} from 'mobx'
import CustomizedForm from './form'
import './index.styl'

@observer
class NormalLogin extends Component {
  @action handleSubmit = values => {
    console.log(values)
  }

  render() {
    return (
      <CustomizedForm 
        ref={form => this.userForm = form}
        submit={this.handleSubmit} 
      /> 
    )
  }
}
export default NormalLogin
