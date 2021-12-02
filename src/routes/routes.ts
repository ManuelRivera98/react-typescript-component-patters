import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyLoad/pages";

const LazyLayout: LazyExoticComponent<JSXComponent> = lazy(() => import(/* webpackChunkName: "LazyLayoutPage" */ '../01-lazyLoad/Layout/LazyLayout'));

type JSXComponent = () => JSX.Element

interface Route {
  id: string;
  path: string,
  component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name: string
  to: string;
};

export const routes: Route[] = [
  {
    id: 'lazyLayout',
    path: '/lazy/*',
    to: '/lazy',
    component: LazyLayout,
    name: 'Lazy Layout'
  },
  {
    id: 'noLazy',
    path: '/noLazy',
    component: NoLazy,
    name: 'No Lazy',
    to: '/noLazy'
  },
]