import React, { useState } from "react";
import "./SiteSelector.css";

const SiteSelector = (props) => {
  const [selectedSiteUrl, setSelectedSiteUrl] = useState("qwe");
  const handleSiteSelect = (e) => {
    setSelectedSiteUrl(e.target.value);
    props.siteSelected(selectedSiteUrl);
  };
  const siteArr = props.sites.map((site) => site);
  return (
    <div className="siteselector-wrapper" data-testid="siteselector-id">
      <div className="label">{props.label}</div>
      <div className="site-selector">
        <select
          className="dropdown"
          value={selectedSiteUrl}
          onChange={(e) => handleSiteSelect(e)}
          data-testid="sites-dropdown"
        >
          {siteArr.map((siteUrl, key) => (
            <option value={siteUrl} key={key}>
              {"test" + (key + 1) + " " + siteUrl}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SiteSelector;
