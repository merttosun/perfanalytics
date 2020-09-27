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
        <div className="inspect-button-wrapper" onClick={() => handleInspect()}>
          <img src="./expand.png" />
          <button className="inspect-button" data-testid="inspect-button-id">
            Inspect
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

// export default Chart;
