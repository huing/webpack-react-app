import React from 'react'
import Loadable from 'react-loadable'

const DelayLoading = ({ pastDelay, error }) => {
  if (pastDelay) {
    return <div>Loading...</div>
  } else if (error) {
    console.log('page error', error)
    return <div>Sorry, there was a problem loading the page.</div>
  }
  return null
}

const routes = [
  {
    name: 'Login',
    path: '/login',
    component: Loadable({
      loader: () => import('../user-login'),
      loading: DelayLoading,
      delay: 3000,
    }),
    exact: true,
    hideInMenu: true,
  },
  {
    name: '布局',
    path: '/',
    routes: [
      {
        path: '/home',
        component: Loadable({
          loader: () => import('../page-home'),
          loading: DelayLoading,
          delay: 3000,
        }),
        exact: true,
        name: 'Home',
      },
      {
        path: '/js',
        component: Loadable({
          loader: () => import('../page-js'),
          loading: DelayLoading,
          delay: 3000,
        }),
        exact: true,
        name: 'JS',
      },
      {
        path: '/css',
        name: 'CSS',
        routes: [
          {
            path: '/css/css',
            component: Loadable({
              loader: () => import('../page-css'),
              loading: DelayLoading,
              delay: 3000,
            }),
            name: 'CSS',
          },
          {
            path: '/css/flex',
            component: Loadable({
              loader: () => import('../page-css/flex'),
              loading: DelayLoading,
              delay: 3000,
            }),
            name: 'Flex',
          },
          {
            path: '/css/position',
            component: Loadable({
              loader: () => import('../page-css/position'),
              loading: DelayLoading,
              delay: 3000,
            }),
            name: 'Position',
          },
          {
            path: '/css/zIndex',
            component: Loadable({
              loader: () => import('../page-css/zIndex'),
              loading: DelayLoading,
              delay: 3000,
            }),
            name: 'zIndex',
          },
        ],
      },
      {
        name: 'Chart',
        path: '/chart',
        routes: [
          {
            name: 'Bar',
            path: '/chart/bar',
            component: Loadable({
              loader: () => import('../page-chart-bar'),
              loading: DelayLoading,
              delay: 3000,
            }),
            exact: true,
          },
          {
            name: 'Shape',
            path: '/chart/shape',
            component: Loadable({
              loader: () => import('../page-chart-shape'),
              loading: DelayLoading,
              delay: 3000,
            }),
            exact: true,
          },
          {
            name: 'Stack',
            path: '/chart/stack',
            component: Loadable({
              loader: () => import('../page-chart-stack'),
              loading: DelayLoading,
              delay: 3000,
            }),
            exact: true,
          },
        ],
      },
      {
        name: 'Markdown',
        path: '/markdown',
        component: Loadable({
          loader: () => import('../page-markdown'),
          loading: DelayLoading,
          delay: 3000,
        }),
        exact: true,
      },
      {
        name: 'Plan',
        path: '/plan',
        component: Loadable({
          loader: () => import('../page-todo'),
          loading: DelayLoading,
          delay: 3000,
        }),
        exact: true,
      },
    ],
  },
]

const getBreadcrumbNameMap = (menuData) => {
  if (!menuData) {
    return {}
  }
  const routerMap = {}
  const flattenMenuData = (data) => {
    data.forEach((menuItem) => {
      if (menuItem.routes) {
        flattenMenuData(menuItem.routes)
      }
      routerMap[menuItem.path] = menuItem
    })
  }
  flattenMenuData(menuData)
  return routerMap
}

const getSubMenu = (item) => {
  if (item.routes && !item.hideRoutesInMenu && item.routes.some((child) => child.name)) {
    return {
      ...item,
      routes: filterMenuData(item.routes),
    }
  }
  return item
}

const filterMenuData = (menuData) => {
  if (!menuData) {
    return []
  }
  return menuData
    .filter((item) => item.name && !item.hideInMenu)
    .map((item) => getSubMenu(item))
    .filter((item) => item)
}

// 去除不显示的菜单项
const menuData = filterMenuData(routes)
// 面包线
const breadcrumbNameMap = getBreadcrumbNameMap(routes)

export { menuData, breadcrumbNameMap, routes }
