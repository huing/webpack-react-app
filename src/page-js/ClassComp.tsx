import React from 'react'

interface PropsDTO {
  [propsName: string]: any
}

class Page extends React.Component<PropsDTO, PropsDTO> {
  constructor(props: PropsDTO) {
    super(props)
    console.log('constructor')
  }
  componentDidMount() {
    // call
    // apply
    //

    console.log('componentDidMount')
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('componentDidCatch')
  }
  componentDidUpdate(prevProps: Readonly<PropsDTO>, prevState: Readonly<PropsDTO>, snapshot?: any) {
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  shouldComponentUpdate(
    nextProps: Readonly<PropsDTO>,
    nextState: Readonly<PropsDTO>,
    nextContext: any,
  ): boolean {
    console.log('shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(
    prevProps: Readonly<PropsDTO>,
    prevState: Readonly<PropsDTO>,
  ): any | null {
    console.log('getSnapshotBeforeUpdate')
  }
  render() {
    console.log('render')
    return <div>content</div>
  }
}
export default Page
