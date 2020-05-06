import React from 'react'
import {observer, Provider} from 'mobx-react'
import BaseBread from '@components/BaseBread'
import SearchBar from './SearchBar'
import Table from './Table'
import ModalSpu from './ModalSpu'
import ModalSku from './ModalSku'
import Store from './store'
import './index.styl'

@observer 
class GoodsSpuManagement extends React.Component {
  constructor(props) {
    super(props)
    this.store = new Store()
  }
  componentDidMount() {
    this.store.init()
  }
  render() {
    return (
      <Provider store={this.store}>
        <BaseBread header={['商品管理', 'spu管理']} />
        <div className="page-goods-spu-management">
          <SearchBar />
          <Table />
          <ModalSpu />
          <ModalSku />
        </div>
      </Provider>
    )
  }
}
export default GoodsSpuManagement
