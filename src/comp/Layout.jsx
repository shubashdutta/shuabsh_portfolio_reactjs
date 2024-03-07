import React from "react";
import Navbar from "./Navbar";
import Hey from "./Hey";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Hey />
    </div>
  );
}

export default Layout;
