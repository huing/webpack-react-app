import React, {Component} from 'react'
import {observer} from 'mobx-react'
import Cookies from 'js-cookie'
import CustomizedForm from './form'
import Store from './store'
import './index.styl'

console.log(Store)

@observer
class NormalLogin extends Component {
  constructor(props) {
    super(props)
    this.store = {}
    console.log(this.store)
  }
  handleSubmit = values => {
    console.log(this)
    // const {store} = this
    const { history} = this.props
    // store.setLoading(true)
    Cookies.set('userName', values.account, {path: '/'})
    // store.updateName(values.account)
    history.push('/operation/home')
    // store.setLoading(false)
    window.location.reload()
  }
  render() {
    return (
      <div className="page-user">
        <div className="section-a"></div>
        <div className="section-c">
          <div className="user-login"> 
            <div className="img" />
            <CustomizedForm submit={this.handleSubmit} />
          </div>
          <footer className="section-c-footer"></footer>
        </div>
        <div className="section-a section-b">
          <div className="footer-bottom"></div>
        </div>
      </div>
    )
  }
}
export default NormalLogin
