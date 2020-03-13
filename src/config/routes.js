import React from 'react'
import Loadable from 'react-loadable'

const DelayLoading = ({pastDelay, error}) => {
  if (pastDelay) {
    return <div>Loading...</div>
  } else if (error) {
    console.log('page error', error)
    return <div>Sorry, there was a problem loading the page.</div>
  } 
  return null
}

//  routes 
export default [{
  path: '/login',
  component: Loadable({loader: () => import('../user-login'), loading: DelayLoading, delay: 3000}),
  exact: true,
}, {
  path: '/register',
  component: Loadable({loader: () => import('../user-register'), loading: DelayLoading, delay: 3000}),
  exact: true,
}, {
  path: '/home',
  component: Loadable({loader: () => import('../page-home'), loading: DelayLoading, delay: 3000}),
  exact: true,
}, {
  path: '/table',
  component: Loadable({loader: () => import('../page-table'), loading: DelayLoading, delay: 3000}),
  exact: true,
}, {
  path: '/date',
  component: Loadable({loader: () => import('../page-date'), loading: DelayLoading, delay: 3000}),
  exact: true,
}, {
  path: '/date/calendar',
  component: Loadable({loader: () => import('../page-date-calendar'), loading: DelayLoading, delay: 3000}),
  exact: true,
}, {
  path: '/tree',
  component: Loadable({loader: () => import('../page-tree'), loading: DelayLoading, delay: 3000}),
  exact: true,
}, {
//   path: '/form/customize',
//   component: Loadable({loader: () => import('../page-form-customize'), loading: DelayLoading, delay: 3000}),
//   exact: true,
// }, {
//   path: '/form/antd',
//   component: Loadable({loader: () => import('../page-form-antd'), loading: DelayLoading, delay: 3000}),
//   exact: true,
// }, {
  path: '/modal/modal',
  component: Loadable({loader: () => import('../page-modal'), loading: DelayLoading, delay: 3000}),
  exact: true,
}, {
  path: '/modal/transition',
  component: Loadable({loader: () => import('../page-css-transition'), loading: DelayLoading, delay: 3000}),
  exact: true,
}, {
  path: '/chart/bar',
  component: Loadable({loader: () => import('../page-chart-bar'), loading: DelayLoading, delay: 3000}),
  exact: true,
}, {
  path: '/chart/shape',
  component: Loadable({loader: () => import('../page-chart-shape'), loading: DelayLoading, delay: 3000}),
  exact: true,
}, {
  path: '/chart/stack',
  component: Loadable({loader: () => import('../page-chart-stack'), loading: DelayLoading, delay: 3000}),
  exact: true,
}]