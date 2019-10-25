import React, {Component} from 'react'
import {Calendar, Badge} from 'antd'
import {observer} from 'mobx-react'
import store from './store'
import './index.styl'

@observer 
class DemoPage extends Component {
  getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  }

  dateCellRender = (value) => {
    const listData = this.getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  onSelect = value => {
    console.log(value)
  }
  onPanelChange = (value, mode) => {
    console.log(value, mode)
  }

  render() {
    return (
      <div className="demo-page">
        <Calendar 
          onSelect={this.onSelect}
          onPanelChange={this.onPanelChange}
          dateCellRender={this.dateCellRender}
        />
      </div> 
    )
  }
}
export default DemoPage
