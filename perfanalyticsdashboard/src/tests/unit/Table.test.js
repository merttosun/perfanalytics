import React from "react";
import ReactDom from "react-dom";
import { render } from "@testing-library/react";
import Table from "../../components/Table/Table";
import TableRow from "../TableRow/TableRow";
import Paginator from "../Paginator/Paginator";
import CircularProgress from "@material-ui/core/CircularProgress";
const tableBulkData = [
  {
    url: "http://localhost:3000/bundle.js",
    type: "script",
    duration: 27.704999985871837,
    transferSize: 946065,
  },
  {
    url: "http://localhost:3000/src/index.js",
    type: "other",
    duration: 4.944999993313104,
    transferSize: 2777,
  },
  {
    url: "http://localhost:3000/bundle.js",
    type: "script",
    duration: 27.065000002039596,
    transferSize: 946065,
  },
  {
    url: "http://localhost:3000/src/index.js",
    type: "other",
    duration: 5.3699999989476055,
    transferSize: 2777,
  },
  {
    url: "http://localhost:3000/bundle.js",
    type: "script",
    duration: 28.335000009974465,
    transferSize: 946065,
  },
];

it("Table renders without crashing", () => {
  const { getByTestId } = render(
    <Table isLoading={true} data={tableBulkData} />
  );
  const tableContainer = getByTestId("table");
  expect(tableContainer).toBeInTheDocument();
});

it("Table renders without crashing", () => {
  const { getByTestId } = render(
    <Table isLoading={true} data={tableBulkData} />
  );
  const tableContainer = getByTestId("table");
  expect(tableContainer).toBeInTheDocument();
});
