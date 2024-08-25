import { getRevenue } from "@/apis/revenue";
import { formatCurrencyWithSuffix } from "@/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { salesData, revenueData } from "../../constants/constants";
import { IRevenueRes } from "../../interface/index";
import BarChart from "../Charts/BarChart";

const ShowValue = ({
  type,
  value,
}: {
  type: "direct" | "indirect";
  value: number;
}) => {
  return (
    <div className="flex flex-row justify-start gap-2  items-center">
      <Image
        src={
          type === "direct"
            ? "/images/directLogo.png"
            : "/images/indirectLogo.png"
        }
        alt={type}
        height={5}
        width={10}
      />
      <p className="text-[30px]">{formatCurrencyWithSuffix(value)}</p>
      <p className="text-[#64748B] text-[14px] ml-2">
        {type === "direct" ? "Direct" : "Indirect"}
      </p>
    </div>
  );
};

const DirectIndirectCard = () => {
  const [revenueData, setRevenueData] = useState<IRevenueRes | null>(null);
  useEffect(() => {
    getRevenue().then((res) => setRevenueData(res));
  }, []);
  if (!revenueData) return null;
  return (
    <div className="bg-white p-2  md:w-[50%]">
      <p>Direct VS Indirect</p>
      <div className="flex flex-row gap-3">
        <ShowValue type="direct" value={revenueData?.directSales as number} />
        <ShowValue
          type="indirect"
          value={revenueData?.indirectSales as number}
        />
      </div>
      <div>
        <BarChart graphData={revenueData?.graphData} />
      </div>
    </div>
  );
};

export default DirectIndirectCard;
