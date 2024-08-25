import React from "react";
import Search from "./Search";
import Messages from "./Messages";
import Error from "./Error";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className="bg-white h-[5%] flex flex-row items-center justify-end px-3 gap-2 ">
      <div className="flex flex-row gap-1.5">
        <Search />
        <Messages />
        <Error />
      </div>
      <div className="border border-[#E2E8F0] h-4 text-none"></div>
      <Profile />
    </div>
  );
};

export default Navbar;
