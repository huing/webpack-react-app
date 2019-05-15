// import {formatMessage} from '../locales'
import pathToRegexp from 'path-to-regexp'

export const matchParamsPath = (pathname, breadcrumbNameMap) => {
  const pathKey = Object.keys(breadcrumbNameMap).find(key => pathToRegexp(key).test(pathname))
  return breadcrumbNameMap[pathKey]
}

const getPageTitle = (pathname, breadcrumbNameMap) => {
  const currRouterData = matchParamsPath(pathname, breadcrumbNameMap)
  if (!currRouterData) {
    return 'title'
  }
  // const pageName = formatMessage({
  //   id: currRouterData.locale || currRouterData.name,
  //   defaultMessage: currRouterData.name,
  // })

  // return `${pageName}`
  return `${currRouterData.name}`
}

export default getPageTitle



export const getMenuMatches = (flatMenuKeys, path) =>
  flatMenuKeys.filter(item => {
    if (item) {
      return pathToRegexp(item).test(path)
    }
    return false
  })