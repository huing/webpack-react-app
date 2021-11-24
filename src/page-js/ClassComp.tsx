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
    console.log('componentDidCatch', error, errorInfo)
  }
  componentDidUpdate(prevProps: Readonly<PropsDTO>, prevState: Readonly<PropsDTO>, snapshot?: any) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  shouldComponentUpdate(
    _nextProps: Readonly<PropsDTO>,
    _nextState: Readonly<PropsDTO>,
    _nextContext: any,
  ): boolean {
    console.log('shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(
    _prevProps: Readonly<PropsDTO>,
    _prevState: Readonly<PropsDTO>,
  ): any | null {
    console.log('getSnapshotBeforeUpdate')
  }
  render() {
    console.log('render')
    return <div>content</div>
  }
}
export default Page
