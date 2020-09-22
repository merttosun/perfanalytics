import React from "react";
import "./TableRow.css";

const TableRow = (props) => {
  return (
    <tr
      className={props.even ? "table-row darker" : "table-row"}
      data-testid={"table-row" + props.key}
    >
      <td className="row-column">{props.data.url}</td>
      <td className="row-column">{props.data.duration}</td>
      <td className="row-column">{props.data.type}</td>
      <td className="row-column">{props.data.transferSize}</td>
    </tr>
  );
};

export default TableRow;
