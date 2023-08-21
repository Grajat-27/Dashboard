import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLayout from "./routes/RootLayout";
import DashboardTab from "./routes/DashboardTab";
import Mainbody from "./routes/Mainbody";
import Timeline, {loader as timelineLoader} from "./routes/Timeline";

const emptyRouteStyle = {
  fontSize: "10rem",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "50rem",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Mainbody />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardTab />,
            children: [
              {
                path: "/dashboard",
                element: <Timeline/>,
                loader:timelineLoader
              },
              {
                path: "/dashboard/timeline",
                element: <Timeline/>,
                loader:timelineLoader
              },
              {
                path: "/dashboard/calendar",
                element: <div style={emptyRouteStyle}>Calender</div>,
              },
              {
                path: "/dashboard/task_dashboard",
                element: <div style={emptyRouteStyle}>Dashboard</div>,
              },
              {
                path: "/dashboard/progress",
                element: <div style={emptyRouteStyle}>Progress</div>,
              },
              {
                path: "/dashboard/forms",
                element: <div style={emptyRouteStyle}>Forms</div>,
              },
              {
                path: "/dashboard/more",
                element: <div style={emptyRouteStyle}>More</div>,
              },
            ],
          },
          {
            path: "/my_tasks",
            element: <div style={emptyRouteStyle}>My Tasks</div>,
          },
          {
            path: "/reporting",
            element: <div style={emptyRouteStyle}>Reporting</div>,
          },
          {
            path: "/portfolios",
            element: <div style={emptyRouteStyle}>Portfolios</div>,
          },
          {
            path: "/goals",
            element: <div style={emptyRouteStyle}>Goals</div>,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
