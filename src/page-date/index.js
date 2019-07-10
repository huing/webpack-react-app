import React, {Component} from 'react'
import {observer} from 'mobx-react'
import moment from 'moment'
import {Button, DatePicker} from 'antd'

import './index.styl'


@observer 
class DemoTable extends Component {
  render() {
    return (
      <div className="demo-table">
        <Button type="primary">antd测试</Button>
        <DatePicker 
          showTime={{
            defaultValue: moment('00:00', 'HH:mm'),
            format: "HH:mm",
          }} 
          format="YYYY-MM-DD HH:mm" 
        />
      </div>
    )
  }
}
export default DemoTable