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

const Home = Loadable({loader: () => import('../home'), loading: DelayLoading, delay:3000})
const DemoTable = Loadable({loader: () => import('../demo-table'), loading: DelayLoading, delay:8000})
const DemoDate = Loadable({loader: () => import('../demo-date'), loading: DelayLoading, delay:3000})
const DemoTablePage = Loadable({loader: () => import('../demo-page'), loading: DelayLoading, delay:3000})

export const BaseLayout = Loadable({loader: () => import('../base-layout'), loading: DelayLoading, delay:3000})
export const UserLayout = Loadable({loader: () => import('../user-layout'), loading: DelayLoading, delay:3000})

export const routes = [{
  path: '/home',
  component: Home,
}, {
  path: '/table',
  component: DemoTable,
}, {
  path: '/date',
  component: DemoDate,
}, {
  path: '/table/test',
  component: DemoTablePage,
// }, {
//   path: '/user',
//   component: UserLayout,
// }, {
//   path: '/',
//   component: BaseLayout,
}]
