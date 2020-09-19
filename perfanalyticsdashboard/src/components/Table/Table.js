import React from "react";
import TableRow from "../TableRow/TableRow";
import Paginator from "../Paginator/Paginator";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Table.css";

const Arr = ["1", "2", "3", "4", "1", "2", "3", "4", "1", "2"];

const Table = (props) => {
  return (
    <div className="resources-table">
      <tr className="header-row">
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
        <th>Country</th>
      </tr>
      <div className="table-content">
        {props.isLoading ? (
          <CircularProgress />
        ) : (
          Arr.map((i, index) => (
            <TableRow
              className="table-row"
              key={index}
              even={index % 2 === 0}
            />
          ))
        )}
      </div>
      <Paginator pageCount={10} />
    </div>
  );
};

export default Table;
