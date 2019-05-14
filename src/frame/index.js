import React, {Component} from 'react'
import {Provider, observer} from 'mobx-react'
import {observable} from 'mobx'
import Cookies from 'js-cookie'
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import {UserLayout, BaseLayout} from '../config/routes'
import store from '../store'

@withRouter
@observer
class Frame extends Component {
  @observable pathname = undefined

  constructor(props) {
    super(props)
    // console.log('props', props)
    this.pathname = props.location.pathname
  }

  checkJsessionID = () => {
    if (this.props.location.pathname !== '/login') {
      if (!Cookies.get('JSESSIONID')) {
        this.props.history.replace('/login')
      }
    } else {
      if (Cookies.get('JSESSIONID')) {
        this.props.history.replace('/home')
      }
    }
  }

  componentDidMount() {
    // console.log('componentDidMount')
    this.checkJsessionID()
  }

  // componentWillMount() {
  //   console.log('componentWillMount')
  //   if (this.pathname === '/') {
  //     if (Cookies.get('JSESSIONID')) {
  //       this.props.history.replace('/home')
  //     } else {
  //       this.props.history.replace('/login')
  //     }
  //   } else {
  //     this.checkJsessionID()
  //   }
  // }

  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps')
  //   this.checkJsessionID()
  // }

  render() {
    return (
      <Provider {...store}>
        <Switch>
          <Route exact component={UserLayout} path="/login" />   
          <Route path='/' component={BaseLayout} />
        </Switch>
      </Provider>            
    )
  }
}

export default Frame