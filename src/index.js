import './index-o'

// import React from 'react'
// import ReactDOM from 'react-dom'

// class Comp1 extends React.Component {
//   handleClick = () => {
//     const {change} = this.props
//     change() 
//     console.log(Date.now())
//   }

//   render() {
//     const {item1} = this.props
//     return (
//       <button type="button" onClick={this.handleClick}>
//         {JSON.stringify(item1)}
//       </button>
//     )
//   }
// }

// class Comp2 extends React.Component {
//   render() {
//     const {item2} = this.props
//     return (
//       <div>
//         {JSON.stringify(item2)}
//       </div>
//     )
//   }
// }

// class Demo extends React.PureComponent {
//   componentDidMount() {
//     const $parent = ReactDOM.findDOMNode(this)
//     const $child = $parent.querySelector('.child')
//     $parent.addEventListener('click', this.onParentDOMClick, false)
//     $child.addEventListener('click', this.onChildDOMClick, false)
//   }

//   onParentDOMClick = evt => {
//     // evt.preventDefault()
//     // evt.stopPropagation()
//     console.log(typeof evt, evt)
//     console.log(
//       Object.getOwnPropertyDescriptor(evt, 'preventDefault'),
//       Object.getOwnPropertyDescriptor(evt, 'stopPropagation'),
//     )
//     console.log('parent dom event')
//   }
  
//   onChildDOMClick = evt => {
//     console.log('child dom event')
//   }    
  
//   onParentClick = evt => {
//     console.log(typeof evt, evt)
//     console.log('parent react event')
//   }

//   onChildClick = evt => {
//     console.log(
//       Object.getOwnPropertyDescriptor(evt, 'preventDefault'),
//       Object.getOwnPropertyDescriptor(evt, 'stopPropagation'),
//     )
//     // console.log(evt.hasOwnProperty('stopPropagation'))
//     evt.stopPropagation()
//     console.log(typeof evt, evt)
//     console.log('child react event')
//   }

//   render() {
//     return (
//       <div onClick={this.onParentClick}>
//         <div className="child" onClick={this.onChildClick}>
//           Demo
//         </div>
//       </div>
//     )
//   }
// }

// export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       item: [],
//     }
//   }

//   handleChange = () => {
//     this.setState(state => ({
//       item: [...state.item, {id: Date.now(), text: 'efg'}],
//     }))
//   }

//   render() {
//     const {item} = this.state
//     return (
//       <div>
//         {JSON.stringify(item)}
//         <div>
//           <Comp1 item1={item} change={this.handleChange} />
//           <Comp2 item2={item} />
//           <Demo />
//         </div>
//       </div>

//     )
//   }

//   componentDidMount() {
//     this.setState(state => ({
//       item: [...state.item, {id: Date.now(), text: 'abc'}],
//     }))
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'))
