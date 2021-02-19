import React from 'react'
import {observer, Provider} from 'mobx-react'
import BaseBread from '@components/BaseBread'
import SearchBar from './SearchBar'
import Table from './Table'
import store from './store'
import Modal from './Modal'
import DetailModal from './DetailModal'
import './index.styl'

@observer 
class OverviewOrder extends React.Component {
  componentDidMount() {
    store.init()
  }
  render() {
    return (
      <Provider store={store}>
        <BaseBread header={['业务总览', '提现管理']} />
        <div className="page-overview-order">
          <SearchBar />
          <Table />
          <Modal />
          <DetailModal />
        </div>
      </Provider>
    )
  }
}
export default OverviewOrder
