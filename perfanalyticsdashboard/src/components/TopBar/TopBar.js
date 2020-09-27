import React, { useState } from "react";
import SiteSelector from "../SiteSelector/SiteSelector";
import DatetimePicker from "../DatetimePicker/DatetimePicker";
import "./TopBar.css";

const TopBar = (props) => {
  const [fromDate, setFromDate] = useState(new Date("2020-09-24T15:20:30Z"));
  const [toDate, setToDate] = useState(new Date());
  const [siteUrl, setSiteUrl] = useState("http://localhost:3000/");

  const handleAnalyze = (type) => {
    let payload = {
      siteUrl,
      fromDate,
      toDate,
      type,
    };
    props.analyzeClicked(payload);
  };

  return (
    <div className="topbar" data-testid="topbar">
      <SiteSelector
        data-testid="siteselector"
        label="URL"
        sites={props.sites}
        selectedSiteUrl={siteUrl}
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
      <div className="buttons-wrapper">
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
      {props.noDataWithThatConfig ? (
        <div className="no-data-warning">
          There is no analyzed data in the options you selected
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TopBar;
