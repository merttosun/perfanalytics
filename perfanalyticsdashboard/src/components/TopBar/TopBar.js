import React, { useState } from "react";
import SiteSelector from "../SiteSelector/SiteSelector";
import DatatimePicker from "../DatatimePicker/DatatimePicker";
import "./TopBar.css";

const TopBar = (props) => {
  const [isThirtyChecked, setIsThirtyChecked] = useState(false);
  const handleSiteSelection = (event) => {
    props.siteSelected(event);
  };
  const handleThirtyMinsCheck = (value) => {
    setIsThirtyChecked(value);
    props.onCheckboxChanged(value);
  };
  return (
    <div className="topbar">
      <SiteSelector
        label="URL"
        sites={props.sites}
        siteSelected={(event) => handleSiteSelection(event)}
      />
      <div className="datetimepickers-wrapper">
        <input
          type="checkbox"
          checked={isThirtyChecked}
          onChange={() => handleThirtyMinsCheck(!isThirtyChecked)}
        />
        <label for="vehicle1">Last 30 mins</label>
        <DatatimePicker className="from-dtp" label="From"></DatatimePicker>
        <DatatimePicker className="to-dtp" label="To"></DatatimePicker>
      </div>
      <button className="save-config-button"> Analyze</button>
    </div>
  );
};

export default TopBar;
