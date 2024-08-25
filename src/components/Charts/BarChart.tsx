import { IRevGraphData } from "@/interface";
import { formatCurrencyWithSuffix } from "@/utils";
import dynamic from "next/dynamic";
import React from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const BarChart = ({ graphData }: { graphData: IRevGraphData[] }) => {
  const directRev = graphData?.map((item) => item?.direct);
  const inDirectRev = graphData?.map((item) => item?.indirect);
  const month = graphData?.map((item) => item?.month);

  const state = {
    series: [
      {
        name: "Direct",
        data: directRev,
      },
      {
        name: "Indirect",
        data: inDirectRev,
      },
    ],
    options: {
      chart: {
        type: "bar",
        toolbar: {
          show: false,
        },
        // height: 430,
      },
      legend: {
        show: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: false,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"],
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      yaxis: {
        labels: {
          formatter: function (value: number) {
            return formatCurrencyWithSuffix(value);
          },
        },
      },
      xaxis: {
        categories: [...month],
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={state.options as ApexCharts.ApexOptions}
        series={state.series}
        type="bar"
        //   width={200}
        height={320}
      />
    </div>
  );
};

export default BarChart;
