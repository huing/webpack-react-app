import React from 'react'
import { Select } from 'antd'

// todo
// hooks 作用域问题
// 例如 useEffect 作用域
// setState 第二参数，同步异步

interface Props<T> {
  list: T[]
}
class SelectComponentType<T extends { id: number; name: string }> extends React.Component<
  Props<T>,
  {}
> {
  render() {
    // & {id: number; name: string}
    const { list, ...rest } = this.props
    return (
      <Select
        {...rest}
        allowClear
        showSearch
        // showArrow={false}
        placeholder="请选择"
        // notFoundContent={null}
        filterOption={(input, option) => {
          // console.log(input, option);
          return option?.children.indexOf(input) >= 0
        }}
        mode="multiple"
      >
        {(list || []).map((item: T) => (
          <Select.Option key={item.id} value={item.id}>
            {item.name}
          </Select.Option>
        ))}
      </Select>
    )
  }
}

type MethodType = 'get' | 'post' | 'delete' | 'put'
interface Options {
  url: string
  method: MethodType
}
const select = <P, T>(Component: React.ComponentType<P>, options: Options) => {
  return class Select extends React.Component<P, { data: any }> {
    constructor(props: P) {
      super(props)
      this.state = {
        data: null,
      }
    }

    getData = async () => {
      const { url, method, ...rest } = options
      const res = await fetch(url, { ...rest })
      return res
    }

    componentDidMount() {
      const res = this.getData()
      console.log(res)
      this.setState({ data: res })
    }

    render() {
      return <Component {...this.props} />
    }
  }
}
const CommentSelect = select(SelectComponentType, { url: '', method: 'get' })
export default CommentSelect
