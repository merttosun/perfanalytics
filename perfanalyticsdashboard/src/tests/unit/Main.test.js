import React from "react";
import { render, cleanup } from "@testing-library/react";
import Main from "../../components/Main/Main";
jest.mock("react-chartjs-2", () => ({ Line: () => null }));
afterEach(cleanup);

it("modal renders without crashing", () => {
  const { getByTestId } = render(<Main />);
  const mainContainer = getByTestId("main");
  expect(mainContainer).toBeInTheDocument();
});
