import React, {Component} from 'react'
import moment from 'moment'
import {observer} from 'mobx-react'
import {Button, DatePicker} from 'antd'
import './App.css'
import './index.styl'

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <div>
              <Button type="primary">antd测试</Button>
            </div>
            <div className="long ">
              <DatePicker className="show-time-mm" showTime />
            </div>
            <div className="long">
              <DatePicker 
                showTime={{
                  defaultValue: moment('00:00', 'HH:mm'),
                  format: "HH:mm",
                }} 
                format="YYYY-MM-DD HH:mm" 
              />
            </div>
          </div>
          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
