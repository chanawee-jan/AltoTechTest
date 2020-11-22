import React from "react";
import { shallow, mount, render } from "enzyme";
import Dashboard from "../views/Dashboard";
describe("<Dashboard />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(<Dashboard />);
    expect(component.find("Row")).toHaveLength(4);
    expect(component.find("Col")).toHaveLength(8);
    expect(component.find("Card")).toHaveLength(4);
    expect(component.find("CardBody")).toHaveLength(4);
    expect(component.find("CardHeader")).toHaveLength(2);
    expect(component.find("CardFooter")).toHaveLength(4);
  });

  it("should mount in a full DOM", () => {
    const component = mount(<Dashboard />);
    expect(component.find("Dashboard").length).toBe(1);
  });

  it("should render to static HTML", () => {
    const component = render(<Dashboard />);
    expect(component.text()).toEqual(
      "Mean from line chart Update NowMean from bar chart Last dayLine Chartกำลังโหลด... Updated 3 minutes agoBar Chartกำลังโหลด... Updated 3 minutes ago"
    );
  });
});
