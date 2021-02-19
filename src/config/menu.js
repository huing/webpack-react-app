const menus = [{
  name: '业务总览',
  path: '/overview',
  icon: 'home',
  routes: [{
    name: '订单管理',
    path: '/overview/order',
    icon: 'home',
  }, {
    name: '订单管理',
    path: '/overview/withdrawal',
    icon: 'home',
  }],
}, {
  name: '商品管理',
  path: '/goods',
  icon: 'home',
  routes: [{
    name: 'spu管理',
    path: '/goods/spuManagement',
    icon: 'home',
  }],
}, {
  name: '成员管理',
  path: '/members',
  icon: 'home',
// }, {
//   name: 'Home',
//   path: '/home',
//   icon: 'home',
// }, {
//   name: 'CSS',
//   path: '/css',
//   icon: 'home',
// }, {
//   name: 'Chart',
//   path: '/chart',
//   icon: 'bar-chart',
//   routes: [{
//     name: 'Bar',
//     path: '/chart/bar',
//     icon: 'bar-chart',
//   }, {
//     name: 'Shape',
//     path: '/chart/shape',
//     icon: 'bar-chart',
//   }, {
//     name: 'Stack',
//     path: '/chart/stack',
//     icon: 'bar-chart',
//   }],
// }, {
//   name: 'Antd',
//   path: '/antd',
//   icon: 'home',
//   routes: [{
//     name: 'Calendar',
//     path: '/antd/calendar',
//     icon: 'bar-chart',
//   }, {
//     name: 'Tree',
//     path: '/antd/tree',
//     icon: 'bar-chart',
//   }],
}]

function formatter(data) {
  if (!data) {
    return undefined
  }
  return data
    .map(item => {
      if (!item.name || !item.path) {
        return null
      }
      const name = item.name
      const result = {
        ...item,
        name,
        path: '/operation' + item.path,
      }
      if (item.routes) {
        const children = formatter(item.routes)
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
      routerMap[menuItem.path] = menuItem
    })
  }
  flattenMenuData(menuData)
  return routerMap
}

const getSubMenu = item => {
  if (item.children && !item.hideChildrenInMenu && item.children.some(child => child.name)) {
    return {
      ...item,
      children: filterMenuData(item.children),
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

const originalMenuData = formatter(menus)
// 去除不显示的菜单项
const menuData = filterMenuData(originalMenuData)
// 面包线
const breadcrumbNameMap = getBreadcrumbNameMap(originalMenuData)

export {
  menuData,
  breadcrumbNameMap,
}

