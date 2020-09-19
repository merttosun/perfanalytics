import React from "react";
import "./DatatimePicker.css";

const DatatimePicker = (props) => {
  return (
    <div className="datetimepicker-wrapper">
      <label className="picker-label">{props.label}</label>
      <input
        type="datetime-local"
        className="datetimepicker"
        name="birthdaytime"
      ></input>
    </div>
  );
};

export default DatatimePicker;
