import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import "./Paginator.css";
const Paginator = (props) => {
  return (
    <div className="paginator-wrapper">
      <Pagination
        className="paginator"
        count={props.pageCount}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default Paginator;
