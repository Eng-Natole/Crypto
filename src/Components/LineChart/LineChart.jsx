import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    if (historicalData?.prices?.length) {
      const dataCopy = [["Date", "Prices"]];
      historicalData.prices.forEach((item) => {
        dataCopy.push([
          new Date(item[0]).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          item[1],
        ]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="100%"
      options={{
        legend: { position: "bottom" },
        hAxis: { title: "Date" },
        vAxis: { title: "Price" },
        chartArea: { width: "80%", height: "70%" },
        colors: ["#2b8be0"],
      }}
      legendToggle
    />
  );
};

export default LineChart;
