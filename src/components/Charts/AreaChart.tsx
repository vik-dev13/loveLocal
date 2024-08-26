import { stat } from "fs";
import React from "react";
// import ReactApexChart from "react-apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Charts = ({
  data,
  name,
  height,
}: {
  data: number[];
  name: string;
  height?: number;
}) => {
  const state = {
    series: [
      {
        name: name,
        data: [...data],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },

      grid: {
        show: false,
        row: {
          opacity: 0.3,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={state.options as ApexCharts.ApexOptions}
        series={state.series}
        type="area"
        //   width={200}
        height={height ?? 120}
      />
    </div>
  );
};

export default Charts;
