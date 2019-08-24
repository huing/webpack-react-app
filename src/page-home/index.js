import React from 'react'
import ReactDOM from 'react-dom'
import {observer} from 'mobx-react'
import {observable} from 'mobx'

import './index.styl'

class DataSource123456 {
  getComments() {
    return [{name: '123'}]
  }

  getBlogPost() {
    return [{name: '456'}]
  }

  addChangeListener(cb) {
    cb()
  }

  removeChangeListener(cb) {
    cb()
  }
}

const DataSource = new DataSource123456()

class CommentList extends React.Component {
  render() {
    // console.log(this.props)
    return <div>{JSON.stringify(this.props)}</div>
  }
}

class BlogPost extends React.Component {
  render() {
    return <div>{JSON.stringify(this.props)}</div>
  }
}


// 此函数接收一个组件...
function withSubscription(WrappedComponent, selectData) {
  // ...并返回另一个组件...
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.state = {
        data: selectData(DataSource, props),
      }
    }

    componentDidMount() {
      // ...负责订阅相关的操作...
      DataSource.addChangeListener(this.handleChange)
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange)
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props),
      })
    }

    render() {
      // ... 并使用新数据渲染被包装的组件!
      // 请注意，我们可能还会传递其他属性
      const {data} = this.state
      return <WrappedComponent data={data} {...this.props} />
    }
  }
}

const CommentListWithSubscription = withSubscription(
  CommentList,
  DataSource123 => DataSource123.getComments()
)

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource456, props) => DataSource456.getBlogPost(props.id)
)

@observer 
class DemoHome extends React.Component {
  @observable array = []

  @observable object = {}

  @observable num1 = undefined

  @observable num2 = null

  constructor(props) {
    super(props)
    this.state = {
      name: '原始值',
    }
  } 

  componentDidMount() {
    this.setState({
      name: 'DidMount改变',
    }, () => {
      console.log(this.state.name)
    })
    console.log(this.state.name)
  }

  handleC = e => {
    console.log(e, e.target)
    this.setState({
      name: '点击改变',
    }, () => {
      console.log(this.state.name)
    })
    console.log(this.state.name)
  }
 
  render() {
    console.log(this.state.name)
    return (
      <div className="demo-home">
        <button type="button" onClick={this.handleC}>点击</button>
        <div>1. 侧边栏 固定值 收缩</div>
        <div>2. 日期</div>
        <div>3. 正则表达式</div>
        <div>4. 深拷贝</div>
        <div>
          <a 
            href="https://github.com/Advanced-Frontend/Daily-Interview-Question"
            target="blank"
          >
            前端
          </a>
        </div>
        <div>useContext</div>
        <CommentListWithSubscription k="123" />
        <BlogPostWithSubscription h={1} DataSource456="DataSource456" />
      </div>
    )
  }
}
export default DemoHome
