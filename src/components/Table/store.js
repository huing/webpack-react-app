import {observable} from 'mobx'

class TableStore {
  @observable col = [{
    title: 'product',
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
  }, {
    title: 'Product1',
    dataIndex: 'product1',
    key: 'product1',
  }, {
    title: 'Qty1',
    dataIndex: 'qty1',
    key: 'qty1',
  }, {
    title: 'Price1',
    dataIndex: 'price1',
    key: 'price1',
  }]

  @observable data = [{
    price: '137.00',
    product1: 'Lawnchair',
    qty1: '1',
    price1: '137.00',
    product: 'Lawnchair',
    qty: '1',
    id: 1,
  }, {
    product: 'Marshmallow rice bar',
    qty: '2',
    price: '1.10',
    product1: 'Marshmallow rice bar',
    qty1: '2',
    price1: '1.10',
    id: 2,
  }, {
    product: 'Book',
    qty: '1',
    price: '10.45',
    product1: 'Book',
    qty1: '1',
    price1: '10.45',
    id: 3,
  }, {
    product: 'Lawnchair',
    qty: '1',
    price: '137.00',
    product1: 'Lawnchair',
    qty1: '1',
    price1: '137.00',
    id: 4,
  }, {
    product: 'Marshmallow rice bar',
    qty: '2',
    price: '1.10',
    product1: 'Marshmallow rice bar',
    qty1: '2',
    price1: '1.10',
    id: 5,
  }, {
    product: 'Book',
    qty: '1',
    price: '10.45',
    product1: 'Book',
    qty1: '1',
    price1: '10.45',
    id: 6,
  }]
}

export default new TableStore() 