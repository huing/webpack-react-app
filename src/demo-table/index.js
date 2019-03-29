import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import {toJS} from 'mobx'
import './index.styl'

@inject('tableStore')
@observer 
class DemoTable extends Component {
  render() {   
    const {     
      tableStore: {columns, data: dataSource},
      // style,
      className,
    } = this.props
    return (
      <div className={`demo-table table-box ${className}`}>
        <table>
          <thead>
            <tr>
              {
                toJS(columns || []).map(item => 
                  <th key={item.dataIndex} data-index={item.dataIndex}>{item.title}</th>
                )
              }
            </tr>
          </thead>
          <tbody>
            {
              toJS(dataSource || []).map((data, i) => {
                return (
                  <tr key={data.id}>
                    {Object.entries(data).map(item => <td key={item[0]}>{item[1]}</td>)}
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
export default DemoTable