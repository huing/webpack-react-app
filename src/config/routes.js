import React from 'react'
import Loadable from 'react-loadable'

const DelayLoading = ({pastDelay, error}) => {
  if (pastDelay) {
    return <div>Loading...</div>
  } else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>
  } else {
    return null
  }
}

const DemoTable = Loadable({loader: () => import('../demo-table'), loading: DelayLoading, delay:3000})
const DemoDate = Loadable({loader: () => import('../demo-date'), loading: DelayLoading, delay:3000})

export const BaseLayout = Loadable({loader: () => import('../base-layout'), loading: DelayLoading, delay:3000})
export const UserLayout = Loadable({loader: () => import('../user-layout'), loading: DelayLoading, delay:3000})

export const routes = [{
  path: '/home/table',
  component: DemoTable,
}, {
  path: '/home/date',
  component: DemoDate,
// }, {
//   path: '/user',
//   component: UserLayout,
// }, {
//   path: '/',
//   component: BaseLayout,
}]
