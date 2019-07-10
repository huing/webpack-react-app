// import {formatMessage} from '../locales'

const menus = [{
  name: 'Home',
  path: '/home',
  icon: 'home',
}, {
  name: 'Table',
  path: '/table',
  icon: 'home',
}, {
  name: 'Modal',
  path: '/modal',
  icon: 'home',
}, {
  name: 'Date',
  path: '/date',
  icon: 'home',
}, {
  name: 'Form',
  path: '/form',
  icon: 'home',
  routes: [{
  //   name: 'Form CUS',
  //   path: '/form/customize',
  //   icon: 'home',
  // }, {
    name: 'Form Antd',
    path: '/form/antd',
    icon: 'home',
  }],
}, {
  name: 'Chart',
  path: '/chart',
  icon: 'bar-chart',
  routes: [{
    name: 'Bar',
    path: '/chart/bar',
    icon: 'bar-chart',
  }, {
    name: 'Shape',
    path: '/chart/shape',
    icon: 'bar-chart',
  }, {
    name: 'Stack',
    path: '/chart/stack',
    icon: 'bar-chart',
  }],
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
      const name = item.name
      // 国际化
      // const name = formatMessage({id: locale, defaultMessage: item.name}) 
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
// 菜单国际化
const originalMenuData = formatter(menus, 'title')
// 去除不显示的菜单项
const menuData = filterMenuData(originalMenuData)
// 面包线
const breadcrumbNameMap = getBreadcrumbNameMap(originalMenuData)


export {
  menuData,
  breadcrumbNameMap,
}

