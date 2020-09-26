import React from "react";
import ReactDom from "react-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import TopBar from "../../components/TopBar/TopBar";
import SiteSelector from "../../components/SiteSelector/SiteSelector";
import DatetimePicker from "../../components/DatetimePicker/DatetimePicker";

afterEach(cleanup);

it("topbar renders without crashing", () => {
  const { getByTestId } = render(
    <TopBar
      btn1Text={"test btn 1 text"}
      btn2Txt={"test btn 1 text"}
      sites={["www.trendyol.com"]}
      analyzeClicked={() => {}}
    />
  );
  const topbarContainer = getByTestId("topbar");
  expect(topbarContainer).toBeInTheDocument();
  expect(topbarContainer).toHaveTextContent("test btn 1 text");
  expect(topbarContainer).toHaveTextContent("test btn 1 text");
});

it("site selecteor renders without crashing", () => {
  const { getByTestId } = render(
    <SiteSelector
      label="test"
      sites={["www.trendyol.com", "asd"]}
      siteSelected={() => {}}
    />
  );
  const siteSelectorContainer = getByTestId("siteselector-id");
  expect(siteSelectorContainer).toBeInTheDocument();
});

it("datetimepicker 1 renders without crashing", () => {
  const { getByTestId } = render(
    <DatetimePicker
      label="test 1"
      value={new Date("2020-09-18T10:20:30Z")}
      maxValue={new Date()}
      minValue={new Date("2020-09-12T10:20:30Z")}
      pickerChange={() => {}}
      type="from"
    />
  );
  const dtp1Container = getByTestId("fromdtp-id");
  expect(dtp1Container).toBeInTheDocument();
});

it("set dates correctly", () => {
  const { getByTestId } = render(
    <TopBar
      btn1Text={"test btn 1 text"}
      btn2Txt={"test btn 1 text"}
      sites={["www.trendyol.com"]}
      analyzeClicked={() => {}}
    />
  );
  fireEvent.click(getByTestId("between-dates-button"));
  expect(getByTestId("from-dtp-id"));
});
