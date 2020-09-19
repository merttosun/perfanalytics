import React, { useState } from "react";
import "./SiteSelector.css";

const SiteSelector = (props) => {
  const [selectedSiteUrl, setSelectedSiteUrl] = useState("qwe");
  const handleSiteSelect = (e) => {
    setSelectedSiteUrl(e.target.value);
  };
  const siteArr = props.sites.map((site) => site);
  return (
    <div className="siteselector-wrapper">
      <label className="">{props.label}</label>
      <div className="site-selector">
        <select
          className="dropdown"
          value={selectedSiteUrl}
          onChange={(e) => handleSiteSelect(e)}
        >
          {siteArr.map((siteUrl, key) => (
            <option value={siteUrl} key={key}>
              {siteUrl}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SiteSelector;
