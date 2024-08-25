import Image from "next/image";
import React from "react";

const Messages = () => {
  return (
    <div className="relative">
      <span className="absolute left-3 bottom-4.5 h-[5px] w-[5px] bg-[red] rounded-[50%] inline-block"></span>
      <button className="bg-light p-1 rounded-[50px] cursor-pointer hover:bg-white">
        <Image
          src={"/images/messages.png"}
          alt="search"
          height={12}
          width={12}
        />
      </button>
    </div>
  );
};

export default Messages;
