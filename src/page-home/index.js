import React from 'react'
import {observer, Provider} from 'mobx-react'
import store from './store'
import './index.styl'

@observer 
class Home extends React.Component {
  componentDidMount() {
    store.init()
  }
  render() {
    return (
      <Provider store={store}>
        <div className="page-home">
        
        </div>
      </Provider>
    )
  }
}
export default Home
