import React, { useState, useEffect } from "react";
import Chart from "../Chart/Chart";
import Table from "../Table/Table";
import TopBar from "../TopBar/TopBar";
import Modal from "../Modal/Modal";
import ChartDataModel from "../../models/ChartModel";

import "./Main.css";

const Main = () => {
  const axios = require("axios");
  const [isModalOpen, toggleModalStatus] = useState(false);
  const [inspectedChart, setInspectedChart] = useState(null);
  const [chartsData, setChartsData] = useState({});
  const [tableLoadingStatus, setTableLoadingStatus] = useState(false);
  const [tableBulkData, setTableData] = useState([]);
  const [sites, setSites] = useState(["http://localhost:3000/"]);
  const [noDataWithThatConfig, setLabelVisibility] = useState(false);

  useEffect(() => {
    async function fetchSites() {
      const result = await axios(
        "https://performanceanalytics.herokuapp.com/api/sites/"
      );
      setSites(result.data);
    }
    fetchSites();
  }, []);

  const handleModalStatus = (value) => {
    toggleModalStatus(value);
  };

  const handleChartInspect = (chartId) => {
    setInspectedChart(chartId);
    toggleModalStatus(true);
  };

  const fetchAnalyzes = async (params) => {
    setTableLoadingStatus(true);
    const res = await axios.get(
      `https://performanceanalytics.herokuapp.com/api/analyzes/`,
      {
        params: {
          siteUrl: params.siteUrl,
          fromDate: params.fromDate,
          toDate: params.toDate,
          type: params.type,
        },
      }
    );
    if (res.data && res.data.length) {
      setLabelVisibility(false);
      prepareChartsData(res.data);
    } else {
      setTableLoadingStatus(false);
      setLabelVisibility(true);
      setChartsData({});
      setTableData([]);
    }
  };

  const prepareChartsData = (bigData) => {
    let ttfbChartInstance = new ChartDataModel({
      bgColor: "#4285f4",
      fill: false,
      label: "TTFB",
    });
    let fcpChartInstance = new ChartDataModel({
      bgColor: "#10DEBF",
      fill: false,
      label: "FCP",
    });
    let domLoadChartInstance = new ChartDataModel({
      bgColor: "#FF9756",
      fill: true,
      label: "DOM Load",
    });
    let windowLoadChartInstance = new ChartDataModel({
      bgColor: "#9C17DE",
      fill: true,
      label: "Window Load",
    });
    let resourcesData = [];
    bigData.forEach((data) => {
      let date = new Date(data.createdAt);
      let h = (date.getHours() < 10 ? "0" : "") + date.getHours();
      let m = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
      let newData = h + ":" + m;
      ttfbChartInstance.datasets[0].data.push(data.payload.ttfb_data);
      ttfbChartInstance.labels.push(newData);
      fcpChartInstance.datasets[0].data.push(data.payload.fcp_data);
      fcpChartInstance.labels.push(newData);
      windowLoadChartInstance.datasets[0].data.push(data.payload.windowLoad);
      windowLoadChartInstance.labels.push(newData);
      domLoadChartInstance.datasets[0].data.push(data.payload.domLoad);
      domLoadChartInstance.labels.push(newData);
      data.payload.resource_data.forEach((r) => {
        resourcesData.push(r);
      });
      setTableData(resourcesData);
      setTableLoadingStatus(false);
    });
    setChartsData({
      ttfbChartInstance,
      fcpChartInstance,
      domLoadChartInstance,
      windowLoadChartInstance,
    });
  };

  return (
    <div className="container" data-testid="main">
      <TopBar
        sites={sites}
        analyzeClicked={(payload) => fetchAnalyzes(payload)}
        btn1Txt={"Analyze Between Dates"}
        btn2Txt={"Analyze Last 30 Mins"}
        noDataWithThatConfig={noDataWithThatConfig}
      />
      <Chart
        inspected={() => handleChartInspect("ttfbChartInstance")}
        label="TTFB"
        showInspectButton
        data={chartsData.ttfbChartInstance || {}}
        description="TTFB, which stands for time to first byte, is the amount of time it takes from when a client makes an HTTP request to it receiving its first byte of data from the web server."
      />
      <Chart
        inspected={() => handleChartInspect("fcpChartInstance")}
        showInspectButton
        data={chartsData.fcpChartInstance || {}}
      />
      <Chart
        inspected={() => handleChartInspect("domLoadChartInstance")}
        showInspectButton
        data={chartsData.domLoadChartInstance || {}}
      />
      <Chart
        inspected={() => handleChartInspect("windowLoadChartInstance")}
        showInspectButton
        data={chartsData.windowLoadChartInstance || {}}
      />
      <Table
        headerColumnTxt_1="URL"
        headerColumnTxt_2="Duration"
        headerColumnTxt_3="Type"
        headerColumnTxt_4="Transfer Size"
        isLoading={tableLoadingStatus}
        data={tableBulkData}
      />
      {isModalOpen ? (
        <Modal
          chartData={chartsData[inspectedChart]}
          closeModal={(e) => handleModalStatus(e)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Main;
