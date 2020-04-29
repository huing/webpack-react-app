import React from 'react'
import {observer, Provider} from 'mobx-react'
import BaseBread from '@components/BaseBread'
import SearchBar from './SearchBar'
import Table from './Table'
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
          <BaseBread header={['成员管理', '权限管理']} />
          <SearchBar />
          <Table />
        </div>
      </Provider>
    )
  }
}
export default Home
