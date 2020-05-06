import React from 'react'
import {observer} from 'mobx-react'
import store from './store'
import './index.styl'

@observer 
class Home extends React.Component {
  componentDidMount() {
    store.init()
  }
  render() {
    return (
      <div className="page-home">
        123
      </div>
    )
  }
}
export default Home
