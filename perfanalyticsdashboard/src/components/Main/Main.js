import React from "react";
import Chart from "../Chart/Chart";
import Table from "../Table/Table";
import TopBar from "../TopBar/TopBar";
import "./Main.css";

const sites = ["asdasd", "qweqwewqe", "zxxccs", "gftrht"];

const Main = () => {
  return (
    <div className="container">
      <TopBar sites={sites} />
      {/* <SiteSelector sites={sites} /> */}
      <Chart
        label="TTFB"
        description="TTFB, which stands for time to first byte, is the amount of time it takes from when a client makes an HTTP request to it receiving its first byte of data from the web server."
      />
      <Chart />
      <Chart />
      <Chart />
      <Table />
    </div>
  );
};

export default Main;
