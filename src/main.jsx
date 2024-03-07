import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./comp/Layout.jsx";
import Home from "./comp/Home.jsx";
import Myskill from "./comp/Myskill.jsx";
import About from "./comp/About.jsx";
import Contact from "./comp/Contact.jsx";
import Myproject from "./comp/Myproject.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "project",
        element: <Myproject />,
      },
      {
        path: "skills",
        element: <Myskill />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
