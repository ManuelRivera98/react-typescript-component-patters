import { lazy, LazyExoticComponent } from "react";

const LazyPage01: LazyExoticComponent<JSXComponent> = lazy(() => import(/* webpackChunkName: "lazyPage01" */ '../01-lazyLoad/pages/LazyPage01'));
const LazyPage02: LazyExoticComponent<JSXComponent> = lazy(() => import(/* webpackChunkName: "lazyPage02" */ '../01-lazyLoad/pages/LazyPage02'));
const LazyPage03: LazyExoticComponent<JSXComponent> = lazy(() => import(/* webpackChunkName: "lazyPage03" */ '../01-lazyLoad/pages/LazyPage03'));

type JSXComponent = () => JSX.Element

interface Route {
  id: string;
  path: string,
  component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name: string
};

export const routes: Route[] = [
  {
    id: 'lazy01',
    path: '/lazy1',
    component: LazyPage01,
    name: 'Lazy Page 01'
  },
  {
    id: 'lazy02',
    path: '/lazy2',
    component: LazyPage02,
    name: 'Lazy Page 02'
  },
  {
    id: 'lazy03',
    path: '/lazy3',
    component: LazyPage03,
    name: 'Lazy Page 03'
  },
]