import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

function OrderByStatePie() {
  const [chartData, setChartData] = useState<any>([]);
  const [series, setSeries] = useState<any>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/orderState");
      setChartData(Object.values(data));
      setSeries(Object.keys(data));
    } catch (error) {
      console.log(error);
    }
  };

  // Configuration for the pie chart
  const chartOptions = {
    chart: {
      type: "pie",
    },
    labels: [...series],
    colors: ["#FF5733", "#FFC300", "#335BFF", "#33FF57", "#C833FF"],
    title: {
      text: "Orders by State",
      align: "center",
      style: {
        fontSize: "20px",
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart
      options={chartOptions as any}
      series={chartData}
      type="pie"
      height={350}
    />
  );
}

export default OrderByStatePie;
