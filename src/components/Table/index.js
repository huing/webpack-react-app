import React, {Component} from 'react'
import {observer, Provider} from 'mobx-react'
import TableOne from './table-one'
import TableTwo from './table-two'
import store from './store'
import './index.styl'

@observer 
class DemoTable extends Component { 
  render() {   
    return (
      <Provider store={store}>
        <div>
          <div>Table 1</div>
          <TableOne className="table-one"/>
          <div>Table 2</div>
          <TableTwo />
        </div>
      </Provider>
    )
  }
}
export default DemoTable