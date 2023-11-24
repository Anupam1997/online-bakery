import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

function OrderByCategoryPie() {
  const [chartData, setChartData] = useState<any>([]);
  const [series, setSeries] = useState<any>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/orderCategory"
      );
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
    colors: ["#D4A76A", "#E1C0A6", "#BF8C5F"],
    title: {
      text: "Orders by category",
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

export default OrderByCategoryPie;
