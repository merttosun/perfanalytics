import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
import DatetimePicker from "../../components/DatetimePicker/DatetimePicker";

// const moment = require
//     .requireActual("moment-timezone")
//     .tz.setDefault("America/Los_Angeles"),
//   defaultProps = {
//     minDate: moment(0),
//   },
const defaultProps = {
  label: "From",
  value: new Date("2020-09-15T10:20:30Z"),
  maxValue: new Date("2020-09-20T10:20:30Z"),
  minValue: new Date("2020-09-12T10:20:30Z"),
  pickerChange: () => {},
  type: "from",
};

const DateTimeInput = (props) => (
  <DatetimePicker {...defaultProps} {...props} />
);

describe("Render DateInput", () => {
  it("render date input correctly with empty value", () => {
    const props = {
        value: new Date("2020-09-12T10:20:30Z"),
      },
      DateInputComponent = mount(<DateTimeInput {...props} />);
    expect(DateInputComponent.prop("value")).toEqual(
      new Date("2020-09-12T10:20:30Z")
    );
  });
});
