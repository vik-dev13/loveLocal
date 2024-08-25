import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Dashboard from "../Dashboard";

const Layout = () => {
  return (
    <div className="flex flex-row justify-start w-full h-[100vh]">
      <Sidebar />

      <Dashboard />
    </div>
  );
};

export default Layout;
