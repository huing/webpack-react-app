// import {formatMessage} from '../locales'
import {pathToRegexp} from 'path-to-regexp' 

// 返回对应的面包项
export const matchParamsPath = (pathname, breadcrumbNameMap) => {
  const pathKey = Object.keys(breadcrumbNameMap).find(key => pathToRegexp(key).test(pathname))
  // console.log(breadcrumbNameMap[pathKey], pathKey)
  return breadcrumbNameMap[pathKey]
}

export const getPageTitle = (pathname, breadcrumbNameMap) => {
  // console.log(pathname, breadcrumbNameMap)
  const currRouterData = matchParamsPath(pathname, breadcrumbNameMap)
  if (!currRouterData) {
    return 'title'
  }
  // 国际化
  // const pageName = formatMessage({
  //   id: currRouterData.locale || currRouterData.name,
  //   defaultMessage: currRouterData.name,
  // })
  // return `${pageName}`

  return currRouterData.name
}

export const getFlatMenuKeys = menuData => {
  let keys = []
  menuData.forEach(item => {
    keys.push(item.path)
    if (item.children) {
      keys = keys.concat(getFlatMenuKeys(item.children))
    }
  })
  return keys
}

export const getMenuMatches = (flatMenuKeys, path) =>
  flatMenuKeys.filter(item => {
    if (item) {
      return pathToRegexp(item).test(path)
    }
    return false
  })

export function urlToList(url) {
  const urllist = url.split('/').filter(i => i)
  return urllist.map((urlItem, index) => `/${urllist.slice(0, index + 1).join('/')}`)
}

export const getSelectedMenuKeys = (flatMenuKeys, pathname) => {
  // console.log(urlToList(pathname).map(itemPath => getMenuMatches(flatMenuKeys, itemPath).pop()))
  return urlToList(pathname).map(itemPath => getMenuMatches(flatMenuKeys, itemPath).pop())
}

export const getDefaultCollapsedSubMenus = (flatMenuKeys, props)=> {
  const {
    location: {pathname},
  } = props
  // console.log('urlToList', urlToList(pathname)
  //   .map(item => getMenuMatches(flatMenuKeys, item)[0])
  //   .filter(item =>item), 
    
  // urlToList(pathname)
  //   .map(item => getMenuMatches(flatMenuKeys, item)[0])
  //   .filter(item =>item)
  //   .reduce((acc, curr) => [...acc, curr], ['/'])
  // )

  return urlToList(pathname)
    .map(item => getMenuMatches(flatMenuKeys, item)[0])
    .filter(item =>item)
    .reduce((acc, curr) => [...acc, curr], ['/'])
}

