import { ISalesData } from "@/interface";
import Image from "next/image";
import React from "react";
import Charts from "../Charts/AreaChart";
import { formatValue } from "@/utils";

const BasicAnalyticsCards = ({
  id,
  name,
  img,
  graphData,
  percentageDifference,
  totalSales,
}: ISalesData) => {
  return (
    <div className="flex flex-col bg-white w-full p-3 gap-2">
      <div className="flex flex-row justify-between items-center">
        <Image src={img} height={20} width={20} alt="img" />
        <Image src={"/images/options.png"} height={20} width={20} alt="img" />
      </div>
      <div>
        <p>{name}</p>
        <p className="text-[#94A3B8] text-[12px] mt-2">SALES</p>
        <div className="flex flex-row gap-2 justify-start items-center">
          <p>{formatValue(totalSales)}</p>
          <div
            className={`${
              percentageDifference > 0 ? "bg-[#10B981]" : "bg-[#F59E0B]"
            } rounded-[10px] text-[12px] px-2 text-center text-white`}
          >
            {percentageDifference < 0
              ? percentageDifference
              : `+${percentageDifference}`}
            %
          </div>
        </div>
      </div>
      <Charts data={graphData} name={name} />
    </div>
  );
};

export default BasicAnalyticsCards;
