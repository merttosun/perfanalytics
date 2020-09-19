import React from "react";
import SiteSelector from "../SiteSelector/SiteSelector";
import DatatimePicker from "../DatatimePicker/DatatimePicker";
import "./TopBar.css";

const TopBar = (props) => {
  return (
    <div className="topbar">
      <SiteSelector label="URL" sites={props.sites} />
      <div className="datetimepickers-wrapper">
        <DatatimePicker label="From"></DatatimePicker>
        <DatatimePicker label="To"></DatatimePicker>
      </div>
      <button className="save-config-button"> Analyze</button>
    </div>
  );
};

export default TopBar;
