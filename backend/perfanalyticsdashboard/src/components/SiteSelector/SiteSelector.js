import React, { useState } from "react";
import "./SiteSelector.css";

const SiteSelector = (props) => {
  const [selectedSiteUrl, setSelectedSiteUrl] = useState("qwe");
  const handleSiteSelect = (e) => {
    setSelectedSiteUrl(e.target.value.siteURL);
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
          {siteArr.map((site, key) => (
            <option value={site.siteURL} key={site.siteURL}>
              {"test" + (key + 1) + " " + site.siteURL}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SiteSelector;
