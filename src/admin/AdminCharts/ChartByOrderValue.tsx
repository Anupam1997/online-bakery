import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

function ChartByOrderValue() {
  const [chartData, setChartData] = useState<any>({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/ordersByValue-ts"
      );

      let dates: any = {};
      Object.keys(data)?.map((key) => {
        data[key].map(({ date, totalValue }: any) => {
          var innerArr = [new Date(date).getTime(), totalValue];
          dates[key] = [];
          dates[key] = [...dates[key], innerArr];
        });
      });

      setChartData(dates);
      console.log(dates);
    } catch (error) {
      console.log(error);
    }
  };

  const series = Object.keys(chartData)?.map((key) => {
    return { name: key, data: chartData[key] };
  });

  const options = {
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    title: {
      text: "Order Value Movement",
      align: "left",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      labels: {
        formatter: function (val: any) {
          return val.toFixed(0);
        },
      },
      title: {
        text: "Total Value",
      },
    },
    xaxis: {
      type: "totalValue",
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val: any) {
          return val.toFixed(0);
        },
      },
    },
  };

  return (
    <ReactApexChart
      options={options as any}
      series={series}
      type="area"
      height={350}
    />
  );
}

export default ChartByOrderValue;