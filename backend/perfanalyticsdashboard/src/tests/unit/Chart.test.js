import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
import Chart from "../../components/Chart/Chart";

jest.mock("react-chartjs-2", () => ({ Line: () => null }));

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "TTFB",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#4285f4",
      borderColor: "#4285f4",
      borderCapStyle: "butt",
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#4285f4",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "red",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [165, 259, 80, 81, 356, 1000, 20],
    },
  ],
};

const defaultProps = {
  showInspectButton: true,
  data: data,
  inspected: () => {},
};

const ChartWrapper = (props) => <Chart {...defaultProps} {...props} />;

it("render correctly date component", () => {
  const ChartComponent = renderer.create(<Chart />).toJSON();
  expect(ChartComponent).toMatchSnapshot();
});

it("check inspect button displayed", () => {
  const props = {
      data: data,
      showInspectButton: true,
    },
    button = mount(<Chart {...props} />).find(".inspect-button");
  expect(button.hasClass("inspect-button")).toEqual(true);
});

it("render date input correctly with null value", () => {
  const props = {
      data: null,
    },
    ChartComponent = mount(<Chart {...props} />);
  expect(ChartComponent.prop("data")).toEqual(null);
});
