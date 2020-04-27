import React, { cloneElement, isValidElement, Component } from 'react'
import { Form } from 'antd'

const FormItem = Form.Item

export default class extends Component {
  static defaultProps = {
    isForm: true,
    hidden: false,
    disabled: false
  }
  setStoreInitialParams = (store, name, value) => {
    if (value && name && store && store.$initParams) {
      store.$initParams(name, value)
    }
  }
  render() {
    const {
      children,
      isForm,
      disabled,
      hidden,
      label,
      store,
      name,
      form,
      initialValue,
      ...rest
    } = this.props
    this.setStoreInitialParams(store, name, initialValue)
    if (typeof hidden === 'function' ? hidden(form.getFieldsValue()) : hidden) {
      return null
    }
    let res = children
    let flag = false
    if (isValidElement(children)) {
      const _disabled =
        typeof disabled === 'function'
          ? disabled(form.getFieldsValue())
          : disabled
      res = _disabled ? cloneElement(children, { disabled: true }) : children
      if (name) {
        flag = true
        res = form.getFieldDecorator(name, { ...rest, initialValue })(res)
      }
    }
    if (isForm) {
      return <FormItem label={label}>{res}</FormItem>
    } else {
      return flag ? res : <span>{res}</span>
    }
  }
}
