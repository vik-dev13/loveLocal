import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <div>
      <button className="bg-light p-1 rounded-[50px] cursor-pointer hover:bg-white">
        <Image src={"/images/search.png"} alt="search" height={12} width={12} />
      </button>
    </div>
  );
};

export default Search;
