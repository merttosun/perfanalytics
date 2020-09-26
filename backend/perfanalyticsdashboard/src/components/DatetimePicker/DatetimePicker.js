import React from "react";
import "./DatetimePicker.css";

const convertDate = (date) => {
  if (typeof date === "undefined") {
    return new Date("2020-09-12T10:20:30Z");
  }
  const tzoffset = new Date().getTimezoneOffset() * 60000;
  const dateWithOffset = new Date(date.getTime() - tzoffset);
  const value = dateWithOffset.toISOString().slice(0, -5);
  return value;
};

const DatetimePicker = (props) => {
  console.log(props.value);

  const dtpickerValue = convertDate(props.value);
  const minLimitForSecondDtpicker = convertDate(props.minValue);
  const maxLimitForFirstDtpicker = convertDate(props.maxValue);

  console.log("dtpickerValue", dtpickerValue);
  const handleDateChange = (e) => {
    props.pickerChange(new Date(e.target.value));
  };
  return (
    <div
      className="datetimepicker-wrapper"
      data-testid={props.label === "test 1" ? "fromdtp-id" : "todtp-id"}
    >
      <label className="picker-label">{props.label}</label>
      <input
        data-testid={props.label === "test 1" ? "fromdtp-input" : "todtp-input"}
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

export default DatetimePicker;
