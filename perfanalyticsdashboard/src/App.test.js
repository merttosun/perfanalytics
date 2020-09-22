import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("react-chartjs-2", () => ({ Line: () => null }));

it("app renders without crashing", () => {
  const { getByTestId } = render(<App />);
  const appContainer = getByTestId("app-container");
  expect(appContainer).toBeInTheDocument();
});
