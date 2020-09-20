import React, { useState } from "react";
import SiteSelector from "../SiteSelector/SiteSelector";
import DatatimePicker from "../DatatimePicker/DatatimePicker";
import "./TopBar.css";

const TopBar = (props) => {
  const [fromDate, setFromDate] = useState(new Date("2020-09-18T10:20:30Z"));
  const [toDate, setToDate] = useState(new Date());
  const [siteUrl, setSiteUrl] = useState("");

  const handleThirtyMinsCheck = () => {
    let now = new Date();
    setFromDate(new Date(now.setMinutes(now.getMinutes() - 30)));
    setToDate(new Date());
  };

  const handleAnalyze = (type) => {
    if (type === "last-thirty") {
      handleThirtyMinsCheck();
    }
    let payload = {
      siteUrl,
      fromDate,
      toDate,
    };
    props.analyzeClicked(payload);
  };

  return (
    <div className="topbar">
      <SiteSelector
        label="URL"
        sites={props.sites}
        siteSelected={(event) => setSiteUrl(event)}
      />
      <div className="datetimepickers-wrapper">
        <DatatimePicker
          className="from-dtp"
          label="From"
          value={fromDate}
          maxValue={toDate}
          minValue={new Date("2020-09-12T10:20:30Z")}
          pickerChange={(date) => setFromDate(date)}
          type={"from"}
        ></DatatimePicker>
        <DatatimePicker
          className="to-dtp"
          label="To"
          value={toDate}
          type={"to"}
          minValue={fromDate}
          maxValue={new Date()}
          pickerChange={(date) => setToDate(date)}
        ></DatatimePicker>
      </div>
      <button
        test-id="between-dates-button"
        className="save-config-button"
        onClick={() => handleAnalyze("between-dates")}
      >
        {props.btn1Txt}
      </button>
      <button
        test-id="last-thirty-button"
        className="save-config-button"
        onClick={() => handleAnalyze("last-thirty")}
      >
        {props.btn2Txt}
      </button>
    </div>
  );
};

export default TopBar;
