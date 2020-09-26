import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import "./Paginator.css";
const Paginator = (props) => {
  const emitPageChange = (e, page) => {
    props.onPageChange(page);
  };
  return (
    <div className="paginator-wrapper">
      <Pagination
        className="paginator"
        count={props.pageCount}
        page={props.activePage}
        variant="outlined"
        shape="rounded"
        onChange={(e, page) => emitPageChange(e, page)}
      />
    </div>
  );
};

export default Paginator;
