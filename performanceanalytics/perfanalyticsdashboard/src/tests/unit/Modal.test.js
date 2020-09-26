import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Modal from "../../components/Modal/Modal";
import Chart from "../../components/Chart/Chart";

jest.mock("react-chartjs-2", () => ({ Line: () => null }));

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

it("modal renders without crashing", () => {
  const { getByTestId } = render(
    <Modal chartData={data} closeModal={() => {}} />
  );
  const modalContainer = getByTestId("modal");
  expect(modalContainer).toBeInTheDocument();
});

it("modal closing without crashing", () => {
  const { getByTestId } = render(
    <Modal chartData={data} closeModal={() => {}} />
  );
  const button = getByTestId("close-modal-button");
  fireEvent(
    button,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(() => getByTestId("modal")).not.toThrow();
});
