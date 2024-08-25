import React from "react";
import Navbar from "../Navbar";
import Header from "./Header";
import Teams from "../ActionsBar/Teams";
import Actions from "../ActionsBar/Actions";

const Dashboard = () => {
  return (
    <div className="flex flex-1 bg-light flex-col">
      <Navbar />
      <div className="p-4 ">
        <Header />
        <div className="flex flex-row justify-between items-center mt-4 ">
          <Teams />
          <Actions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
