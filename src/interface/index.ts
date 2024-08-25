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
