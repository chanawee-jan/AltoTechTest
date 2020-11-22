import React from "react";
import { shallow, mount, render } from "enzyme";
import Sidebar from "../components/Sidebar/Sidebar";
describe("<Sidebar />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(<Sidebar />);
    expect(component.find(".sidebar")).toHaveLength(1);
    expect(component.find(".logo")).toHaveLength(1);
    expect(component.find(".simple-text logo-mini")).toHaveLength(1);
    expect(component.find(".logo-img")).toHaveLength(1);
    expect(component.find(".simple-text logo-normal")).toHaveLength(1);
    expect(component.find(".sidebar-wrapper")).toHaveLength(1);
    expect(component.find("Nav")).toHaveLength(1);
    expect(component.find("NavLink")).toHaveLength(1);
  });
  
  it("should mount in a full DOM", () => {
    const component = mount(<Sidebar />);
    expect(component.find("Sidebar").length).toBe(1);
  });

  it("should render to static HTML", () => {
    const component = render(<Sidebar />);
    expect(component.text()).toEqual(
      "Alto Tech"
    );
  });
});
