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

export default [{
  path: '/overview/order',
  component: Loadable({loader: () => import('../page-overview-order'), loading: DelayLoading, delay: 3000}),
  exact: true,
}, {
  path: '/overview/withdrawal',
  component: Loadable({loader: () => import('../page-overview-withdrawal'), loading: DelayLoading, delay: 3000}),
  exact: true,
}, {
  path: '/goods/spuManagement',
  component: Loadable({loader: () => import('../page-goods-spuManagement'), loading: DelayLoading, delay: 3000}),
  exact: true,
}, {
  path: '/members',
  component: Loadable({loader: () => import('../page-members'), loading: DelayLoading, delay: 3000}),
  exact: true,
}, {
  path: '/home',
  component: Loadable({loader: () => import('../page-home'), loading: DelayLoading, delay: 3000}),
  exact: true,
}, {
  path: '/antd/calendar',
  component: Loadable({loader: () => import('../page-antd-calendar'), loading: DelayLoading, delay: 3000}),
  exact: true,
}, {
  path: '/antd/tree',
  component: Loadable({loader: () => import('../page-antd-tree'), loading: DelayLoading, delay: 3000}),
  exact: true,
}, {
  path: '/css',
  component: Loadable({loader: () => import('../page-css'), loading: DelayLoading, delay: 3000}),
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