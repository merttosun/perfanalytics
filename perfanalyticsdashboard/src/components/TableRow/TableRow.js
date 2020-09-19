import React from "react";
import "./TableRow.css";

const TableRow = (props) => {
  return (
    <tr className={props.even ? "table-row darker" : "table-row"}>
      <td className="row-column">qwe</td>
      <td className="row-column">asd</td>
      <td className="row-column">asd</td>
      <td className="row-column">asd</td>
    </tr>
  );
};

export default TableRow;
