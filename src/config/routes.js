import React from "react";
import Loadable from "react-loadable";

const DelayLoading = ({ pastDelay, error }) => {
  if (pastDelay) {
    return <div>Loading...</div>;
  } else if (error) {
    console.log("page error", error);
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  return null;
};

const routes = [
  {
    path: "/home",
    component: Loadable({ loader: () => import("../page-home"), loading: DelayLoading, delay: 3000 }),
    exact: true,
    name: "Home",
  },
  {
    path: "/css",
    component: Loadable({ loader: () => import("../page-css"), loading: DelayLoading, delay: 3000 }),
    exact: true,
    name: "CSS",
  },
  {
    name: "Chart",
    path: "/chart",
    routes: [
      {
        name: "Bar",
        path: "/chart/bar",
        component: Loadable({ loader: () => import("../page-chart-bar"), loading: DelayLoading, delay: 3000 }),
        exact: true,
      },
      {
        name: "Shape",
        path: "/chart/shape",
        component: Loadable({ loader: () => import("../page-chart-shape"), loading: DelayLoading, delay: 3000 }),
        exact: true,
      },
      {
        name: "Stack",
        path: "/chart/stack",
        component: Loadable({ loader: () => import("../page-chart-stack"), loading: DelayLoading, delay: 3000 }),
        exact: true,
      },
    ],
  },
  {
    name: "Antd",
    path: "/antd",
    routes: [
      {
        name: "Calendar",
        path: "/antd/calendar",
        component: Loadable({ loader: () => import("../page-antd-calendar"), loading: DelayLoading, delay: 3000 }),
        exact: true,
      },
      {
        name: "Tree",
        path: "/antd/tree",
        component: Loadable({ loader: () => import("../page-antd-tree"), loading: DelayLoading, delay: 3000 }),
        exact: true,
      },
    ],
  },
  {
    name: "Markdown",
    path: "/markdown",
    routes: [
      {
        name: "JS",
        path: "/markdown/js",
        component: Loadable({ loader: () => import("../page-interview-js"), loading: DelayLoading, delay: 3000 }),
        exact: true,
      },
      {
        name: "HTML",
        path: "/markdown/html",
        component: Loadable({ loader: () => import("../page-interview-html"), loading: DelayLoading, delay: 3000 }),
        exact: true,
      },
      {
        name: "CSS",
        path: "/markdown/css",
        component: Loadable({ loader: () => import("../page-interview-css"), loading: DelayLoading, delay: 3000 }),
        exact: true,
      },
    ],
  },
  {
    name: "Plan",
    path: "/plan",
    component: Loadable({ loader: () => import("../page-todo"), loading: DelayLoading, delay: 3000 }),
    exact: true,
  },
];

function formatter(data) {
  if (!data) {
    return undefined;
  }
  return data
    .map((item) => {
      if (!item.name || !item.path) {
        return null;
      }
      const name = item.name;
      const result = {
        ...item,
        name,
      };
      if (item.routes) {
        const children = formatter(item.routes);
        result.children = children;
      }
      delete result.routes;
      return result;
    })
    .filter((item) => item);
}

const getBreadcrumbNameMap = (menuData) => {
  if (!menuData) {
    return {};
  }
  const routerMap = {};
  const flattenMenuData = (data) => {
    data.forEach((menuItem) => {
      if (menuItem.children) {
        flattenMenuData(menuItem.children);
      }
      routerMap[menuItem.path] = menuItem;
    });
  };
  flattenMenuData(menuData);
  return routerMap;
};

const getSubMenu = (item) => {
  if (item.children && !item.hideChildrenInMenu && item.children.some((child) => child.name)) {
    return {
      ...item,
      children: filterMenuData(item.children),
    };
  }
  return item;
};

const filterMenuData = (menuData) => {
  if (!menuData) {
    return [];
  }
  return menuData
    .filter((item) => item.name && !item.hideInMenu)
    .map((item) => getSubMenu(item))
    .filter((item) => item);
};

const originalMenuData = formatter(routes);
// 去除不显示的菜单项
const menuData = filterMenuData(originalMenuData);
// 面包线
const breadcrumbNameMap = getBreadcrumbNameMap(originalMenuData);

export { menuData, breadcrumbNameMap, routes };
