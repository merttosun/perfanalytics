import React from "react";
import ReactDom from "react-dom";
import { render, cleanup } from "@testing-library/react";
import Table from "../../components/Table/Table";
import Paginator from "../../components/Paginator/Paginator";
import TableRow from "../../components/TableRow/TableRow";
import renderer from "react-test-renderer";

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

afterEach(cleanup);

it("Table renders without crashing", () => {
  const { getByTestId } = render(
    <Table
      headerColumnTxt_1="URL"
      headerColumnTxt_2="Duration"
      headerColumnTxt_3="Type"
      headerColumnTxt_4="Transfer Size"
      isLoading={true}
      data={tableBulkData}
    />
  );
  const tableContainer = getByTestId("table");
  expect(tableContainer).toBeInTheDocument();
  expect(tableContainer).toHaveTextContent("URL");
  expect(tableContainer).toHaveTextContent("Duration");
  expect(tableContainer).toHaveTextContent("Duration");
  expect(tableContainer).toHaveTextContent("Transfer Size");
});

it("Table renders without crashing", () => {
  const { getByTestId } = render(<Table isLoading={false} data={[{}]} />);
  const tableContainer = getByTestId("table");
  expect(tableContainer).toBeInTheDocument();
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <Table
        headerColumnTxt_1="test url for snapshot"
        headerColumnTxt_2="test duration label for snapshot"
        headerColumnTxt_3="type"
        headerColumnTxt_4="Transfer Size2"
        isLoading={true}
        data={tableBulkData}
      ></Table>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
