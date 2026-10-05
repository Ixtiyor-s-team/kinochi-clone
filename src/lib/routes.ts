import { lazy } from "react";
import { PATHS } from "./paths";

const HomePage = lazy(() => import("../pages/home/page"));
const NewsPage = lazy(() => import("../pages/news/NewsPage"));

export const routes = [
  {
    path: PATHS.HOME,
    component: HomePage,
  },
  {
    path: PATHS.NEWS(":slug"),
    component: NewsPage,
  },

  // {
  //   component: NotFoundPage,
  // },
];
