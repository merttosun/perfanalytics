import React from "react";
import "./DatatimePicker.css";

const DatatimePicker = (props) => {
  const handleDateChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="datetimepicker-wrapper">
      <label className="picker-label">{props.label}</label>
      <input
        type="datetime-local"
        className="datetimepicker"
        name="birthdaytime"
        value={props.data}
        onChange={(e) => handleDateChange(e)}
      ></input>
    </div>
  );
};

export default DatatimePicker;
