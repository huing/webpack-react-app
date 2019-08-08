import React, {Component} from 'react'
import {observer} from 'mobx-react'
import moment from 'moment'
import {Button, DatePicker} from 'antd'

import './index.styl'
import '../common/fun.styl'


@observer 
class DemoTable extends Component {
  handleSubmit = e => {
    e.preventDefault()
    console.log(e.target.avatar.value)
  }

  handleChange = e => {
    console.log(e.target.value)
  }

  render() {
    return (
      <div className="demo-table">
        <Button type="primary">antd测试</Button>
        <DatePicker 
          showTime={{
            defaultValue: moment('00:00', 'HH:mm'),
            format: 'HH:mm',
          }} 
          format="YYYY-MM-DD HH:mm" 
        />

        <div className="m100">
          <label className="form-item-label" htmlFor="date">
            日期
            <input 
              className="form-item-input date"
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
              type="date" 
              name="date" 
              id="date" 
            />
          </label>
        </div>

        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="avatar">
              <div>Choose a profile picture:</div>
              <input 
                type="file"
                id="avatar" 
                name="avatar"
                accept="image/*"
                onChange={this.handleChange}
              />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
       
      </div>
    )
  }
}
export default DemoTable


