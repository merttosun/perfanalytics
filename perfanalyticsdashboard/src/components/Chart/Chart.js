import React from "react";
import { Line } from "react-chartjs-2";
import "./Chart.css";
// const data = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "TTFB",
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: "#4285f4",
//       borderColor: "#4285f4",
//       borderCapStyle: "butt",
//       borderDashOffset: 0.0,
//       borderJoinStyle: "miter",
//       pointBorderColor: "#4285f4",
//       pointBackgroundColor: "#fff",
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: "red",
//       pointHoverBorderColor: "rgba(220,220,220,1)",
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [165, 259, 80, 81, 356, 1000, 20],
//     },
//   ],
// };
export default function Chart(props) {
  const handleInspect = () => {
    props.inspected();
  };
  return (
    <div className="chart-wrapper" data-testid="chart">
      <Line data={props.data} className="line-chart" />
      {props.showInspectButton ? (
        <button className="inspect-button" onClick={() => handleInspect()}>
          Inspect
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

// export default Chart;
