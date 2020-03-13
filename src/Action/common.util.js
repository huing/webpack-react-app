export const noop = () => {}
//约定对应prop的state都以_开头+prop
export const getRes = (instance, propName) => {
  if (propName in instance.props) {
    return instance.props[propName]
  }
  return instance.state['_' + propName]
}
export const isNoProp = (cmp, key) => {
  return !(key in cmp.props)
}
export const injectInit = cmp => {
  cmp.props.onInit &&
    cmp.props.onInit({
      getState: name => {
        return name ? cmp.state[name] : cmp.state
      }
    })
}
export const toArray = value => {
  let ret = value
  if (value === undefined || value === '[]') {
    ret = []
  } else if (!Array.isArray(value)) {
    ret = [value]
  }
  return ret
}
export const getStoreFun = (store, name) => {
  if (!store) {
    return noop
  }
  if (store.__base_store_name__) {
    return store[name] || noop
  }
  console.error('请正确继承@store中对应的store')
  return noop
}
