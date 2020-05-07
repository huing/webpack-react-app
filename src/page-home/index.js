import React from 'react'
import {observer} from 'mobx-react'
import store from './store'
import './index.styl'

@observer 
class Home extends React.Component {
  componentDidMount() {
    store.init()
  }
  render() {
    return (
      <div className="page-home">
        <div className="FBH">
          <div className='dot'></div>
          <div className="">
            <div className='line'>123</div>
            <div className='line'>123</div>
            <div className='line'>123</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
