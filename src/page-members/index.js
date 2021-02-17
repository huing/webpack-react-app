import React from 'react'
import {observer, Provider} from 'mobx-react'
import BaseBread from '@components/BaseBread'
import SearchBar from './SearchBar'
import Table from './Table'
import store from './store'
import Modal from './Modal'
import './index.styl'

@observer 
class OverviewOrder extends React.Component {
  componentDidMount() {
    store.init()
  }
  render() {
    return (
      <Provider store={store}>
        <BaseBread header={['成员管理']} />
        <div className="page-members">
          <SearchBar />
          <Table />
          <Modal />
        </div>
      </Provider>
    )
  }
}
export default OverviewOrder
