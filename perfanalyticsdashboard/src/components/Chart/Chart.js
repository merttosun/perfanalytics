import React from "react";
import { Line } from "react-chartjs-2";
import "./Chart.css";

export default function Chart(props) {
  const handleInspect = () => {
    props.inspected();
  };
  return (
    <div className="chart-wrapper" data-testid="chart">
      <Line data={props.data} className="line-chart" />
      {props.showInspectButton ? (
        <button
          data-testid="inspect-button-id"
          className="inspect-button"
          onClick={() => handleInspect()}
        >
          Inspect
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

// export default Chart;
