import React from 'react'
import {observer} from 'mobx-react'
import {observable} from 'mobx'

import './index.styl'

class DataSource123456 {
  // constructor(props) {
  //   super(props)
  //   console.log(props)
  // }

  getComments(...res) {
    console.log(res)
    return [{name: '123'}]
  }

  getBlogPost(...id) {
    console.log(id)
    return [{name: '456', id}]
  }

  addChangeListener(cb) {
    cb()
    console.log(cb)
  }

  removeChangeListener(cb) {
    cb()
    console.log(cb)
  }
}

const DataSource = new DataSource123456()

class CommentList extends React.Component {
  render() {
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
      console.log(props)
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

  render() {
    return (
      <div className="demo-home">
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
