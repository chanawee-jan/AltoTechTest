import React from "react";
import { shallow, mount, render } from "enzyme";
import LineChart from "../components/Charts/LineChart";
describe("<LineChart />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(<LineChart />);
    expect(component.find("Chart")).toHaveLength(0);
  });
  
  it("should mount in a full DOM", () => {
    const component = mount(<LineChart />);
    expect(component.find("LineChart").length).toBe(1);
  });

  it("should render to static HTML", () => {
    const component = render(<LineChart />);
    expect(component.text()).toEqual(
      "กำลังโหลด..."
    );
  });
});
