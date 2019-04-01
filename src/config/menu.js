import {formatMessage} from '../locales'

const routes = [{
  name: 'Home',
  path: '/home',
  icon: 'bar-chart',
}, {
  name: 'DemoTable',
  path: '/table',
  icon: 'bar-chart',
  routes: [{
    name: 'test',
    path: '/table/test',
    icon: 'bar-chart',
  }],
}, {
  name: 'DemoDate',
  path: '/date',
  icon: 'bar-chart',
}]

function formatter(data, parentName) {
  if (!data) {
    return undefined
  }
  return data
    .map(item => {
      if (!item.name || !item.path) {
        return null
      }

      let locale = 'menu'
      if (parentName && parentName !== '/') {
        locale = `${parentName}_${item.name}`
      } else {
        locale = `menu_${item.name}`
      }
      // if enableMenuLocale use item.name,
      // close menu international
      const name = formatMessage({id: locale, defaultMessage: item.name})
      const result = {
        ...item,
        name,
        locale,
      }
      if (item.routes) {
        const children = formatter(item.routes, locale)
        // Reduce memory usage
        result.children = children
      }
      delete result.routes
      return result
    })
    .filter(item => item)
}

const getBreadcrumbNameMap = menuData => {
  if (!menuData) {
    return {}
  }
  const routerMap = {}

  const flattenMenuData = data => {
    data.forEach(menuItem => {
      if (menuItem.children) {
        flattenMenuData(menuItem.children)
      }
      // Reduce memory usage
      routerMap[menuItem.path] = menuItem
    })
  }
  flattenMenuData(menuData)
  return routerMap
}

const getSubMenu = item => {
  // doc: add hideChildrenInMenu
  if (item.children && !item.hideChildrenInMenu && item.children.some(child => child.name)) {
    return {
      ...item,
      children: filterMenuData(item.children), // eslint-disable-line
    }
  }
  return item
}

const filterMenuData = menuData => {
  if (!menuData) {
    return []
  }
  return menuData
    .filter(item => item.name && !item.hideInMenu)
    .map(item => getSubMenu(item))
    .filter(item => item)
}

const originalMenuData = formatter(routes, 'title')

const menuData = filterMenuData(originalMenuData)

const breadcrumbNameMap = getBreadcrumbNameMap(originalMenuData)

export {
  menuData,
  breadcrumbNameMap,
}

export default routes