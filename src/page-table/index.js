import React, {Component} from 'react'
import {observer} from 'mobx-react'
import TableOne from './table-one'
import TableTwo from './table-two'
import store from './store'

import './index.styl'

@observer 
class DemoTable extends Component { 
  render() {   
    return (
      <div>
        <div>Table 1</div>
        <TableOne className="table-one"/>
        <div>Table 2</div>
        <TableTwo />
      </div>
      
    )
  }

  componentDidMount() {
    store.getDoor()
    // store.getDoor()
    // store.getDoor()
    store.postDoor()
    // store.postDoor()
    // store.postDoor()
  }
}
export default DemoTable