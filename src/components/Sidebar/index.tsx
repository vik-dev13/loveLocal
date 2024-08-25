import { pages } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = ({}: {}) => {
  const [showSideBar, setSideBar] = useState(true);
  return (
    <div
      className={`hidden md:flex flex-col justify-start ${
        showSideBar ? "w-[15%]" : "w-[5%]"
      } bg-dark text-white`}
    >
      <div className="flex flex-row justify-between items-center mb-4 p-4">
        {showSideBar && (
          <Image
            src={"/images/bitmap.png"}
            alt="bitmap"
            width={20}
            height={20}
          />
        )}
        <button onClick={() => setSideBar(!showSideBar)}>
          <Image
            src={"/images/arrow-left.svg"}
            alt="arr-left"
            width={20}
            height={20}
          />
        </button>
      </div>
      <div className="">
        <div className="mb-1 text-[#64748B] px-4">Pages</div>
        {pages?.map((page) => (
          <Link href={page?.link} key={page?.name}>
            <div
              className={`flex flex-row py-2 px-3 ${
                showSideBar ? "justify-start" : "justify-center"
              }items-center gap-2  hover:bg-dark-40`}
            >
              <Image src={page?.img} alt="bitmap" width={25} height={20} />
              {showSideBar && page?.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
