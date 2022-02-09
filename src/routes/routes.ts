import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

//const LazyPage3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/"../01-lazyload/pages/LazyPage3"));

export const routes: Route[] = [
  {
    path: "/lazy",
    Component: lazy(
      () =>
        import(
          /*webpackChunkName: "LazyLayout"*/ "../01-lazyload/layout/LazyLayout"
        )
    ),
    name: "LazyPage-1",
  },
  {
    path: "/no-lazy",
    Component: NoLazy,
    name: "No Lazy Loading",
  },
  /*{
    path: "/lazy2",
    Component: LazyPage2,
    name: "LazyPage-2",
  },
  {
    path: "/lazy3",
    Component: LazyPage3,
    name: "LazyPage-3",
  },*/
];
