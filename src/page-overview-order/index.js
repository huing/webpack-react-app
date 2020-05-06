import React from 'react'
import {observer, Provider} from 'mobx-react'
import BaseBread from '@components/BaseBread'
import SearchBar from './SearchBar'
import Tab from './Tab'
import Table from './Table'
import store from './store'
import './index.styl'

@observer 
class OverviewOrder extends React.Component {
  componentDidMount() {
    store.init()
  }
  render() {
    return (
      <Provider store={store}>
        <BaseBread header={['成员管理', '权限管理']} />
        <div className="page-overview-order">
          <SearchBar />
          <Tab />
          <Table />
        </div>
      </Provider>
    )
  }
}
export default OverviewOrder
