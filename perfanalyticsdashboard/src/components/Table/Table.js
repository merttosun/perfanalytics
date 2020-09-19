import React from "react";
import TableRow from "../TableRow/TableRow";
import "./Table.css";
const Arr = ["1", "2", "3", "4", "1", "2", "3", "4", "1", "2"];
const Table = () => {
  return (
    <div className="resources-table">
      <tr className="header-row">
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
        <th>Country</th>
      </tr>
      {Arr.map((i, index) => (
        <TableRow className="table-row" key={index} even={index % 2 === 0} />
      ))}
    </div>
  );
};

export default Table;
