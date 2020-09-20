import React from "react";
import "./DatatimePicker.css";

const convertDate = (date) => {
  const tzoffset = new Date().getTimezoneOffset() * 60000;
  const dateWithOffset = new Date(date.getTime() - tzoffset);
  const value = dateWithOffset.toISOString().slice(0, -5);
  return value;
};

const DatatimePicker = (props) => {
  console.log(props.value);

  const dtpickerValue = convertDate(props.value);
  const minLimitForSecondDtpicker = convertDate(props.minValue);
  const maxLimitForFirstDtpicker = convertDate(props.maxValue);

  console.log("dtpickerValue", dtpickerValue);
  const handleDateChange = (e) => {
    props.pickerChange(new Date(e.target.value));
  };
  return (
    <div className="datetimepicker-wrapper">
      <label className="picker-label">{props.label}</label>
      <input
        type="datetime-local"
        className="datetimepicker"
        min={
          props.type === "to"
            ? minLimitForSecondDtpicker
            : convertDate(props.minValue)
        }
        max={
          props.tpe === "from"
            ? maxLimitForFirstDtpicker
            : convertDate(new Date())
        }
        value={dtpickerValue}
        onChange={(e) => handleDateChange(e)}
      ></input>
    </div>
  );
};

export default DatatimePicker;
