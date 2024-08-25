import Image from "next/image";
import React from "react";

const Error = () => {
  return (
    <div>
      <button className="bg-light p-1 rounded-[50px] cursor-pointer hover:bg-white">
        <Image src={"/images/error.png"} alt="search" height={12} width={12} />
      </button>
    </div>
  );
};

export default Error;
