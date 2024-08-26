import { revenueData } from "@/constants/constants";

export const getRevenue = async () => {
  const URL = "http://34.93.245.38/revenue";
  try {
    // await fetch(URL, {
    //   method: "GET",
    //   mode: "no-cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    const res = {
      graphData: revenueData?.directIndirectInfo?.graphData,
      directSales: revenueData?.directIndirectInfo?.totalSalesDirect,
      indirectSales: revenueData?.directIndirectInfo?.totalSalesIndirect,
    };
    return res;
  } catch (err) {
    throw Error("Something went wrong");
  }
};
