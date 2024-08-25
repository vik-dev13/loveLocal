import Image from "next/image";
import React from "react";

const Actions = () => {
  return (
    <div className="flex flex-row gap-2  ">
      <button className="bg-white p-3 rounded-[4px]">
        <Image src={"/images/filter.png"} alt="filter" height={12} width={15} />
      </button>
      <div className="bg-white p-2 rounded-[4px] flex flex-row gap-2 ">
        <Image src="/images/date.png" alt="date" height={15} width={18} />
        <p>OCT 15, 2022 - OCT 31, 2022</p>
      </div>
    </div>
  );
};

export default Actions;
