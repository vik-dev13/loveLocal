import { stat } from "fs";
import React from "react";
// import ReactApexChart from "react-apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Charts = ({ data, name }: { data: number[]; name: string }) => {
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
      {typeof window !== "undefined" && (
        <ReactApexChart
          options={state.options as ApexCharts.ApexOptions}
          series={state.series}
          type="area"
          //   width={200}
          height={120}
        />
      )}
    </div>
  );
};

export default Charts;
