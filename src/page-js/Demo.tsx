import React from 'react'
// 高阶组件是参数为组件，返回值为新组件的函数
// 组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件

class DataSource {
  static addChangeListener(handleChange: () => void) {}

  static getComments() {
    return [1, 2, 3]
  }

  static removeChangeListener(handleChange: () => void) {}

  static getBlogPost(id: number) {
    return ['a', 'b', 'c']
  }
}

class Comment<T> extends React.Component<T, {}> {
  render() {
    console.log('Comment', this.props)
    return <div>Comment</div>
  }
}

class TextBlock<T> extends React.Component<T, {}> {
  render() {
    console.log('TextBlock', this.props)
    return <div>TextBlock</div>
  }
}

class CommentList<T> extends React.Component<T, {}> {
  constructor(props: T) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      // 假设 "DataSource" 是个全局范围内的数据源变量
      comments: DataSource.getComments(),
    }
  }

  componentDidMount() {
    // 订阅更改
    DataSource.addChangeListener(this.handleChange)
  }

  componentWillUnmount() {
    // 清除订阅
    DataSource.removeChangeListener(this.handleChange)
  }

  handleChange() {
    // 当数据源更新时，更新组件状态
    this.setState({
      comments: DataSource.getComments(),
    })
  }

  render() {
    console.log('CommentList', this.props)
    return <Comment comment={this.props} />
  }
}

class BlogPost<T> extends React.Component<T, {}> {
  render() {
    console.log('BlogPost', this.props)
    return <TextBlock text={this.props} />
  }
}

// 此函数接收一个组件...
function withSubscription<p>(
  WrappedComponent: React.ComponentType<p>,
  selectData: (DataSource: any, props: { id: number }) => any,
) {
  // ...并返回另一个组件...
  return class extends React.Component<p, { data: number[] }> {
    constructor(props: any) {
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
        data: selectData(DataSource, this.props as any),
      })
    }

    render() {
      // ... 并使用新数据渲染被包装的组件!
      // 请注意，我们可能还会传递其他属性
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
}

const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource: any, props: { id: number }) => DataSource.getComments(),
)

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource: any, props: { id: number }) => DataSource.getBlogPost(props.id),
)

export default class Demo extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <div>高阶组件</div>
        <CommentListWithSubscription />
        <BlogPostWithSubscription />
      </div>
    )
  }
}
