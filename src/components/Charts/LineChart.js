import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { store } from "redux/store";

export const LineChart = () => {
  const [data, setData] = useState();
  const options = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
      ],
    },
  };

  const series = [
    {
      name: "series-1",
      data: data,
    },
  ];

  useEffect(()=>{
    if (store.getState().data.GraphData !== undefined && store.getState().data.GraphData !== null) {
      setData(
        Object.keys(store.getState().data.GraphData["LineData"]).map(function (
          key
        ) {
          return store.getState().data.GraphData["LineData"][key];
        })
      );
    }
  },[])

  store.subscribe(() => {
    if (store.getState().data.GraphData["LineData"] !== undefined && store.getState().data.GraphData["LineData"] !== null) {
      setData(
        Object.keys(store.getState().data.GraphData["LineData"]).map(function (
          key
        ) {
          return store.getState().data.GraphData["LineData"][key];
        })
      );
    }
  });

  if (!data) {
    return <p>กำลังโหลด...</p>;
  }
  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width={500}
      height={320}
    />
  );
};
