import React from "react";
import Navbar from "../Navbar";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div className="flex flex-1 bg-light flex-col">
      <Navbar />
      <div className="p-4 ">
        <Header />
      </div>
    </div>
  );
};

export default Dashboard;
