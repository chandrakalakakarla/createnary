import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "../pages/Notfound";
import Home from "../pages/Home";
import PageTwo from "../pages/PageTwo";


const Routes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "pagetwo",
      element: <PageTwo />,
    },
  ]);

  return element;
};

export default Routes;
