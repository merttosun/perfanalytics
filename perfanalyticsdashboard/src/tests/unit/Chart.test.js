import React, { useState } from "react";
import { render } from "@testing-library/react";
import Chart from "../../components/Chart/Chart";
import { Line } from "react-chartjs-2";
import renderer from "react-test-renderer";

it("qweqweq renders without crashing", () => {
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
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#4285f4",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "red",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [165, 259, 80, 81, 356, 1000, 20],
      },
    ],
  };
  const { getByTestId } = render(
    <Chart inspected={() => {}} showInspectButton data={data} />
  );
  const chartContainer = getByTestId("chart");
  expect(chartContainer).toBeInTheDocument();
});
