import React, { useState } from "react";
import Chart from "../Chart/Chart";
import Table from "../Table/Table";
import TopBar from "../TopBar/TopBar";
import Modal from "../Modal/Modal";
import "./Main.css";

const sites = ["asdasd", "qweqwewqe", "zxxccs", "gftrht"];

const Main = () => {
  const [isModalOpen, toggleModalStatus] = useState(false);
  const [inspectedChart, setInspectedChart] = useState(null);

  const handleModalStatus = (value) => {
    toggleModalStatus(value);
  };
  const handleChartInspect = (chartId) => {
    setInspectedChart(chartId);
    toggleModalStatus(true);
  };
  const handleModalClose = () => {};
  return (
    <div className="container">
      <TopBar sites={sites} />
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
