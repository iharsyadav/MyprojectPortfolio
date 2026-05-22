import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import Home from "../pages/HomePage";

import NotFound from "../pages/NotFound";

import Dashboard from "../pages/Dashboard";
import BasicProjects from "../components/projects/BasicProjects";
import AdvancedProjects from "../components/projects/AdvancedProjects";
import IntermediateProjects from "../components/projects/IntermediateProjects";

const router = createBrowserRouter([
  {
    path: "/",

    element: <RootLayout />,

    children: [
      {
        index: true,

        element: <Home />,
      },

      {
        path: "dashboard",

        element: <Dashboard />,
      },
      {
        path: "basic-projects",

        element: <BasicProjects />,
      },
      {
        path: "intermediate-projects",

        element: <IntermediateProjects />,
      },
      {
        path: "advanced-projects",

        element: <AdvancedProjects />,
      },
    ],
  },

  {
    path: "*",

    element: <NotFound />,
  },
]);

export default router;
