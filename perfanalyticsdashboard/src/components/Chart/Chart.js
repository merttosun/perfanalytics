import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import "./Chart.css";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "TTFB",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#4285f4",
      borderColor: "#4285f4",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#4285f4",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#4285f4",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [165, 259, 80, 81, 356, 1000, 20],
    },
  ],
};
const Chart = (props) => {
  const handleInspect = (e, chartId) => {
    props.inspected(chartId);
  };
  return (
    <div className="chart-wrapper">
      <Line data={data} className="line-chart" />
      {props.showInspectButton ? (
        <button
          className="inspect-button"
          onClick={(event) => handleInspect(event, props.chartId)}
        >
          Inspect
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Chart;
