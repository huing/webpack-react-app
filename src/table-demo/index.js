import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import {toJS} from 'mobx'
import './index.styl'

@inject('tableStore')
@observer 
class TableDemo extends Component {
  render() {
    const {
      columns,
      data,
    } = this.props.tableStore
    console.log(toJS(data || []))
    return (
      <div className="demo-table">
        <table lang="en-US" className="with-currency">
          <thead>
            <tr>
              {
                toJS(columns || []).map((item, index) => 
                  <th key={item.dataIndex} scope="col">{item.title}</th>
                )
              }
            </tr>
          </thead>
          {/* <tfoot>
            <tr>
              <th colSpan="2" scope="row">Total:</th>
              <td>148.55</td>
            </tr>
          </tfoot> */}
          <tbody>
            {
              toJS(data || []).map(item => 
                <tr key={item.id}>
                  {Object.keys(item).map(itemKey => <td>{itemKey}</td>)}
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}
export default TableDemo