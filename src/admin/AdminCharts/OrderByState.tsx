import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

function OrderByState() {
  const [chartData, setChartData] = useState<any>({});
  const [series, setSeries] = useState<any>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/orderState");
      setChartData(data);
      setSeries([
        {
          name: "Orders by order state",
          data: Object.values(data),
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const options = {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,

        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        return val;
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: Object.keys(chartData),
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        formatter: function (val: any) {
          return val;
        },
      },
    },
    colors: ["#FF5733", "#FFC300", "#335BFF", "#33FF57", "#C833FF"],
    title: {
      text: "Orders By order state",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#444",
      },
    },
  };

  return (
    <ReactApexChart
      options={options as any}
      series={series}
      type="bar"
      height={350}
    />
  );
}

export default OrderByState;
