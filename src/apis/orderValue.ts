import { orderValueData } from "@/constants/constants";

export const getOrderVal = async () => {
  const URL = "http://34.93.245.38/order-value";
  try {
    // await fetch(URL, {
    //   method: "GET",
    //   mode: "no-cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    const res = {
      graphData: orderValueData?.averageOrderValueInfo?.graphData,
      percentageDifference:
        orderValueData?.averageOrderValueInfo?.percentageDifference,
      total: orderValueData?.averageOrderValueInfo?.total,
    };
    return res;
  } catch (err) {
    throw Error("Something went wrong");
  }
};
