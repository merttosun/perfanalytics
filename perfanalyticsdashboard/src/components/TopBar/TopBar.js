import React, { useState } from "react";
import SiteSelector from "../SiteSelector/SiteSelector";
import DatetimePicker from "../DatetimePicker/DatetimePicker";
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
    <div className="topbar" data-testid="topbar">
      <SiteSelector
        data-testid="siteselector"
        label="URL"
        sites={props.sites}
        siteSelected={(event) => setSiteUrl(event)}
      />
      <div className="datetimepickers-wrapper" data-testid="from-dtp-id">
        <DatetimePicker
          className="from-dtp"
          label="From"
          value={fromDate}
          maxValue={toDate}
          minValue={new Date("2020-09-12T10:20:30Z")}
          pickerChange={(date) => setFromDate(date)}
          type="from"
        ></DatetimePicker>
        <DatetimePicker
          className="to-dtp"
          label="To"
          value={toDate}
          type="to"
          minValue={fromDate}
          maxValue={new Date()}
          pickerChange={(date) => setToDate(date)}
        ></DatetimePicker>
      </div>
      <button
        data-testid="between-dates-button"
        className="save-config-button"
        onClick={() => handleAnalyze("between-dates")}
      >
        {props.btn1Txt}
      </button>
      <button
        data-testid="last-thirty-button"
        className="save-config-button"
        onClick={() => handleAnalyze("last-thirty")}
      >
        {props.btn2Txt}
      </button>
    </div>
  );
};

export default TopBar;
