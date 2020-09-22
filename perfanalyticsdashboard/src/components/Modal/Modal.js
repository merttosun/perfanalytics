import React from "react";
import Chart from "../Chart/Chart";
import "./Modal.css";

const Modal = (props) => {
  const handleClose = () => {
    props.closeModal(false);
  };
  return (
    <div className="modal" data-testid="modal">
      <div
        className="close-label"
        onClick={() => handleClose()}
        data-testid="close-modal-button"
      >
        X
      </div>
      <Chart
        data={props.chartData}
        className="inspected-chart"
        showInspectButton={false}
      />
    </div>
  );
};

export default Modal;
