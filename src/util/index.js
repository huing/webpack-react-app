export const omit = (obj, fields) => {
  const copy = Object.assign({}, obj)
  for (let i = fields.length - 1; i > -1; i--) {
    delete copy[fields[i]]
  }
  return copy
}
export function isStr(obj) {
  return typeof obj === 'string'
}
export function isArr(obj) {
  return Array.isArray(obj)
}
export function isObj(obj) {
  return obj !== null && typeof obj === 'object' && !isArr(obj)
}
const hasKey = (type, obj, keys) => {
  if (!isObj(obj)) {
    return false
  }
  if (isStr(keys)) {
    return obj.hasOwnProperty(keys)
  }
  if (isArr(keys)) {
    const cb = item => hasKey(type, obj, item)
    return type === 'some' ?
      keys.some(cb) :
      keys.every(cb)
  }
  return false
}
export const hasSomeKey = (obj, keys) => hasKey('some', obj, keys)
export const hasEveryKey = (obj, keys) => hasKey('every', obj, keys)

export function isNum(value, isStrict) {
  if (!isStrict) {
    value = +value
  }
  return typeof value === 'number' && value - value + 1 === 1
}

export const getMomentTime = (timeArr, index, fmt = 'YYYY-MM-DD') => {
  if (!isArr(timeArr)) {
    return timeArr
  }
  if (isNum(index)) {
    return (timeArr[index] || {}).format && timeArr[index].format(fmt)
  } else {
    return timeArr.map(item => {
      item = item || {}
      return item.format && item.format(index || fmt)
    })
  }
}