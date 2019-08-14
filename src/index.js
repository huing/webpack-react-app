import React from 'react'
import ReactDOM from 'react-dom'

class Comp1 extends React.Component {
  handleClick = () => {
    const {change} = this.props
    change() 
    console.log(Date.now())
  }

  render() {
    const {item1} = this.props
    return (
      <button type="button" onClick={this.handleClick}>
        {JSON.stringify(item1)}
      </button>
    )
  }
}

class Comp2 extends React.Component {
  render() {
    const {item2} = this.props
    return (
      <div>
        {JSON.stringify(item2)}
      </div>
    )
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: [],
    }
  }

  handleChange = () => {
    this.setState(state => ({
      item: [...state.item, {id: Date.now(), text: 'efg'}],
    }))
  }

  render() {
    const {item} = this.state
    return (
      <div>
        {JSON.stringify(item)}
        <div>
          <Comp1 item1={item} change={this.handleChange} />
          <Comp2 item2={item} />
        </div>
      </div>

    )
  }

  componentDidMount() {
    this.setState(state => ({
      item: [...state.item, {id: Date.now(), text: 'abc'}],
    }))
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
