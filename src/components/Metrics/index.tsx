import { getSales } from "@/apis/sales";
import { ISalesData } from "@/interface";
import React, { useEffect, useState } from "react";
import BasicAnalyticsCards from "./BasicAnalyticsCards";

const Metrics = () => {
  const [salesData, setSalesData] = useState<ISalesData[] | null>(null);
  useEffect(() => {
    getSales().then((data) => {
      setSalesData(data?.salesData);
    });
  }, []);
  return (
    <div className="flex flex-col md:flex-row gap-2 ">
      {salesData?.map((item) => (
        <div key={item?.id} className="flex  w-full md:w-[33%]">
          <BasicAnalyticsCards
            id={item?.id}
            img={item?.img}
            graphData={item?.graphData}
            name={item?.name}
            percentageDifference={item?.percentageDifference}
            totalSales={item?.totalSales}
          />
        </div>
      ))}
    </div>
  );
};

export default Metrics;
