import {observable} from 'mobx'

class CardStore {
  @observable columns = [{
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  }, {
    title: 'Qty',
    dataIndex: 'qty',
    key: 'qty',
  }, {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  }]
}

export default new CardStore() 