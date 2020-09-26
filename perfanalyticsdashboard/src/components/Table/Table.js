import React, { useState } from "react";
import TableRow from "../TableRow/TableRow";
import Paginator from "../Paginator/Paginator";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Table.css";

const Table = (props) => {
  const [activePage, setActivePage] = useState(1);
  return (
    <div className="resources-table" data-testid="table">
      <tr className="header-row">
        <th>{props.headerColumnTxt_1}</th>
        <th>{props.headerColumnTxt_2}</th>
        <th>{props.headerColumnTxt_3}</th>
        <th>{props.headerColumnTxt_4}</th>
      </tr>
      <div className="table-content">
        {props.isLoading ? (
          <CircularProgress />
        ) : (
          props.data.map((i, index) => {
            return index >= (activePage - 1) * 10 && index < activePage * 10 ? (
              <TableRow
                className="table-row"
                key={index}
                even={index % 2 === 0}
                data={i}
              />
            ) : (
              ""
            );
          })
        )}
      </div>
      <Paginator
        pageCount={parseInt(props.data.length / 10)}
        activePage={activePage}
        disabled={props.isLoading}
        onPageChange={(page) => setActivePage(page)}
      />
    </div>
  );
};

export default Table;
