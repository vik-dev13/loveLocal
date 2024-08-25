import { salesData } from "@/constants/constants";
import { ISalesData } from "@/interface";

export const getSales = async () => {
  const URL = "http://34.93.245.38/sale";
  try {
    await fetch(URL, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res: ISalesData[] = [
      {
        id: "customer",
        name: "Customer",
        img: "/images/customerLogo.png",
        graphData: salesData?.customerInfo?.graphData,
        percentageDifference: salesData?.customerInfo?.percentageDifference,
        totalSales: salesData?.customerInfo?.totalSales,
      },
      {
        id: "keyAccountInfo",
        name: "Key Accounts",
        img: "/images/keyAccount.png",
        graphData: salesData?.keyAccountInfo?.graphData,
        percentageDifference: salesData?.keyAccountInfo?.percentageDifference,
        totalSales: salesData?.keyAccountInfo?.totalSales,
      },
      {
        id: "retail",
        name: "Retail",
        img: "/images/retailLogo.png",
        graphData: salesData?.retailerInfo?.graphData,
        percentageDifference: salesData?.retailerInfo?.percentageDifference,
        totalSales: salesData?.retailerInfo?.totalSales,
      },
    ];
    return { salesData: res, user: salesData?.userDetails };
  } catch (err) {
    console.log(err);
    throw Error("Something went wrong");
  }
};
