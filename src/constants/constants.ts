export const pages: { img: string; name: string; link: string }[] = [
  {
    img: "/images/dashboard.png",
    name: "Dashboard",
    link: "/",
  },
  {
    img: "/images/customers.png",
    name: "Customers",
    link: "/",
  },
];

export const team = [
  {
    id: "1",
    img: "/images/team1.png",
  },
  {
    id: "2",
    img: "/images/team2.png",
  },
  {
    id: "3",
    img: "/images/team3.png",
  },
  {
    id: "4",
    img: "/images/team4.png",
  },
];

export const salesData = {
  customerInfo: {
    graphData: [1, 6, 4, 1, 2, 1, 3, 8],
    percentageDifference: -19,
    totalSales: 19345456,
  },
  keyAccountInfo: {
    graphData: [6, 1, 3, 7, 3, 6, 4, 3],
    percentageDifference: 29,
    totalSales: 9345456,
  },
  retailerInfo: {
    graphData: [1, 3, 4, 5, 4, 5, 3, 8],
    percentageDifference: 42,
    totalSales: 25345456,
  },
  userDetails: {
    designation: "Marketing Lead",
    name: "Anujith",
    newChat: true,
  },
};

export const revenueData = {
  directIndirectInfo: {
    graphData: [
      {
        direct: 2500000,
        indirect: 9000000,
        month: "Mar 22",
      },
      {
        direct: 3500000,
        indirect: 10000000,
        month: "Apr 22",
      },
      {
        direct: 4500000,
        indirect: 11000000,
        month: "May 22",
      },
      {
        direct: 3800000,
        indirect: 2000000,
        month: "Jun 22",
      },
      {
        direct: 4800000,
        indirect: 3000000,
        month: "Jul 22",
      },
      {
        direct: 5800000,
        indirect: 8000000,
        month: "Aug 22",
      },
    ],
    totalSalesDirect: 15345456,
    totalSalesIndirect: 24345456,
  },
};

export const orderValueData = {
  averageOrderValueInfo: {
    fromDate: "Oct 15th",
    graphData: {
      current: [600000, 100000, 300000, 700000, 300000, 600000, 400000, 300000],
      previous: [
        400000, 300000, 500000, 200000, 400000, 700000, 200000, 500000,
      ],
    },
    percentageDifference: 39,
    toDate: "Today",
    total: 3456,
  },
};
