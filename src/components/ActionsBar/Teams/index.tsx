import { team } from "@/constants/constants";
import Image from "next/image";
import React from "react";

const Teams = () => {
  return (
    <div className="flex flex-row gap-1">
      {team?.map((item, index) => (
        <div
          key={item?.id}
          className={`bg-light ${
            index !== 0 ? "-ml-[.5rem]" : ""
          } rounded-[50%]`}
        >
          <Image
            src={item?.img}
            alt={`team_${item?.id}`}
            height={25}
            width={25}
          />
        </div>
      ))}
      <button className="bg-white rounded-[50%] p-1 -ml-[.4rem]">
        <Image src="/images/plus.png" alt="p[lus_icon" height={18} width={18} />
      </button>
    </div>
  );
};

export default Teams;
