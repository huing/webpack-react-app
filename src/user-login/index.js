import React, {Component} from 'react'
import {observer} from 'mobx-react'
import Cookies from 'js-cookie'
import CustomizedForm from './form'
import Store from './store'
import './index.styl'

@observer
class NormalLogin extends Component {
  constructor(props) {
    super(props)
    this.store = new Store()
    console.log('-----------login', this.store)
  }
  handleSubmit = values => {
    const { history} = this.props
    this.store.setLoading(true)
    Cookies.set('userName', values.account, {path: '/'})
    this.store.updateName(values.account)
    history.push('/operation/home')
    this.store.setLoading(false)
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
