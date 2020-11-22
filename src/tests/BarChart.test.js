import React from "react";
import { shallow, mount, render } from "enzyme";
import BarChart from "../components/Charts/BarChart";
describe("<BarChart />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(<BarChart />);
    expect(component.find("Chart")).toHaveLength(0);
  });
  
  it("should mount in a full DOM", () => {
    const component = mount(<BarChart />);
    expect(component.find("BarChart").length).toBe(1);
  });

  it("should render to static HTML", () => {
    const component = render(<BarChart />);
    expect(component.text()).toEqual(
      "กำลังโหลด..."
    );
  });
});
