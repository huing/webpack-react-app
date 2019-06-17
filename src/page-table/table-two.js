import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {observable, toJS} from 'mobx'
import {Table} from 'antd'

@observer 
class TableTwo extends Component {
  @observable pagination = {
    pageSize: 10,
    current: 3,
    total: 500,
    showLessItems: true,
  }

  render() {
    const dataSource = []
    for (let i = 1; i <= 500; i++) {
      dataSource.push({
        key: i,
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      })
    }
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }]
    return (
      <div>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{...toJS(this.pagination)}}
          onChange={page => {
            this.pagination = Object.assign({}, this.pagination, {
              pageSize: page.pageSize,
              current: page.current,
              total: page.total,
            })
          }} 
        />
      </div> 
    )
  }
}
export default TableTwo