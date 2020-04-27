import BaseTable from '@components/BaseTable'
import columns from './columns'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class Table extends BaseTable {
  $store = this.props.store
  $columns = columns(this.props.store)
  $bordered = false
  $style = { marginTop: 20 }
}
export default Table
