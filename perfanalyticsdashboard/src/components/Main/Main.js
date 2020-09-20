import React, { useState } from "react";
import Chart from "../Chart/Chart";
import Table from "../Table/Table";
import TopBar from "../TopBar/TopBar";
import Modal from "../Modal/Modal";
import Service from "../../services/service";

import "./Main.css";

const sites = ["asdasd", "qweqwewqe", "zxxccs", "gftrht"];

const Main = () => {
  const axios = require("axios");
  const [isModalOpen, toggleModalStatus] = useState(false);
  const [inspectedChart, setInspectedChart] = useState(null);
  const [dashboardData, setResponseData] = useState("");
  const [selectedSiteUrl, setSelectedSite] = useState("");
  const handleModalStatus = (value) => {
    toggleModalStatus(value);
  };

  const handleChartInspect = (chartId) => {
    setInspectedChart(chartId);
    toggleModalStatus(true);
  };

  const prepareDashboardData = (bulkData) => {
    console.log("bulkData", bulkData);
  };

  const fetchAnalyzes = async () => {
    console.log("fetchAnalyzes", selectedSiteUrl);
    const res = await axios.get(`http://localhost:5000/api/analyzes/`, {
      params: { siteUrl: "http://localhost:3000/" },
    });
    console.log(res);
  };

  return (
    <div className="container">
      <button onClick={() => fetchAnalyzes()}>fetch button</button>
      <TopBar sites={sites} siteSelected={(event) => setSelectedSite(event)} />
      {/* <SiteSelector sites={sites} /> */}
      <Chart
        chartId={1}
        inspected={handleChartInspect}
        label="TTFB"
        showInspectButton
        description="TTFB, which stands for time to first byte, is the amount of time it takes from when a client makes an HTTP request to it receiving its first byte of data from the web server."
      />
      <Chart chartId={2} inspected={handleChartInspect} showInspectButton />
      <Chart chartId={3} inspected={handleChartInspect} showInspectButton />
      <Chart chartId={4} inspected={handleChartInspect} showInspectButton />
      <Table isLoading={false} />
      {isModalOpen ? (
        <Modal
          chartId={inspectedChart}
          closeModal={(e) => handleModalStatus(e)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Main;
