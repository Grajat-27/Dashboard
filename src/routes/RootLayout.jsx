import React from "react";

import SideNav from "../components/SideNav";
import UserOnline from "../components/UserOnline";
import { Outlet } from "react-router-dom";

function RootLayout() {
  const style = {
    display: "flex",
    flexDirection: "row",
    width:"100%"
  };
  return (
    <div style={style}>
      <SideNav />
      <Outlet/>
      <UserOnline/>
    </div>
  );
}

export default RootLayout;
