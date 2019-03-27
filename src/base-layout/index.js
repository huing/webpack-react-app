import React, {Component} from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {observer} from 'mobx-react'
import {Button, DatePicker} from 'antd'
import './index.styl'

@observer
class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Button type="primary">antd测试</Button>
          <DatePicker 
            showTime={{
              defaultValue: moment('00:00', 'HH:mm'),
              format: "HH:mm",
            }} 
            format="YYYY-MM-DD HH:mm" 
          />
        </header>
        <main className="app-main">
          <Link to="/tab/table">表单</Link>
          <h1>我的食谱配料: <i lang="fr-FR">Poulet basquaise</i></h1>
          <ul>
            <li data-quantity="1kg" data-vegetable>Tomatoes</li>
            <li data-quantity="3" data-vegetable>Onions</li>
            <li data-quantity="3" data-vegetable>Garlic</li>
            <li data-quantity="700g" data-vegetable="not spicy like chili">Red pepper</li>
            <li data-quantity="2kg" data-meat>Chicken</li>
            <li data-quantity="optional 150g" data-meat>Bacon bits</li>
            <li data-quantity="optional 10ml" data-vegetable="liquid">Olive oil</li>
            <li data-quantity="25cl" data-vegetable="liquid">White wine</li>
          </ul>
        </main>
      </div>
    )
  }
}

export default App
