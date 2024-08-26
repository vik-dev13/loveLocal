import { getOrderVal } from "@/apis/orderValue";
import { IOrderVal } from "@/interface";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Charts from "../Charts/AreaChart";

const AvgOrderVal = () => {
  const [isCurrent, setIsCurrent] = useState(true);
  const [orderVal, setOrderVal] = useState<IOrderVal | null>(null);
  useEffect(() => {
    getOrderVal().then((res) => {
      setOrderVal(res);
    });
  }, []);
  if (!orderVal) return null;
  return (
    <div className="flex flex-col bg-white  md:w-[50%] p-3">
      <p>AVG Order Value</p>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center justify-start">
          <p className="text-[30px]">{orderVal?.total}</p>
          <div
            className={`${
              orderVal?.percentageDifference > 0
                ? "bg-[#10B981]"
                : "bg-[#F59E0B]"
            } rounded-[10px] text-[12px] px-2 text-center text-white`}
          >
            {orderVal?.percentageDifference < 0
              ? orderVal?.percentageDifference
              : `+${orderVal?.percentageDifference}`}
            %
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-row justify-start items-center gap-1">
            <button onClick={() => setIsCurrent(true)}>
              <Image
                src={
                  isCurrent
                    ? "/images/radio-active.png"
                    : "/images/radio-inactive.png"
                }
                alt="radio"
                height={10}
                width={10}
              />
            </button>
            Current
          </div>
          <div className="flex flex-row justify-start items-center gap-1">
            <button onClick={() => setIsCurrent(false)}>
              <Image
                src={
                  !isCurrent
                    ? "/images/radio-active.png"
                    : "/images/radio-inactive.png"
                }
                alt="radio"
                height={10}
                width={10}
              />
            </button>
            Previous
          </div>
        </div>
      </div>
      <Charts
        data={
          isCurrent
            ? orderVal?.graphData?.current
            : orderVal?.graphData?.previous
        }
        name="Avg Order Value"
        height={300}
      />
    </div>
  );
};

export default AvgOrderVal;
