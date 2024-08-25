export interface IUser {
  designation: string;
  name: string;
  newChat: boolean;
}

export interface ISalesData {
  id: string;
  name: string;
  img: string;
  graphData: number[];
  percentageDifference: number;
  totalSales: number;
}

export interface IRevGraphData {
  direct: number;
  indirect: number;
  month: string;
}
export interface IRevenueData {
  directIndirectInfo: {
    graphData: IRevGraphData[];
  };
  totalSalesDirect: number;
  totalSalesIndirect: number;
}

export interface IRevenueRes {
  graphData: IRevGraphData[];
  directSales: number;
  indirectSales: number;
}
