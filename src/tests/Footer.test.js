import React from "react";
import { shallow, mount, render } from "enzyme";
import Footer from "../components/Footer/Footer";
describe("<Schedule />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(<Footer />);
    expect(component.find("#footerid")).toHaveLength(1);
    expect(component.find("Container")).toHaveLength(1);
    expect(component.find("Row")).toHaveLength(1);
    expect(component.find(".footer-nav")).toHaveLength(1);
    expect(component.find("ul")).toHaveLength(1);
    expect(component.find("li")).toHaveLength(3);
  });
  
  it("should mount in a full DOM", () => {
    const component = mount(<Footer />);
    expect(component.find("Footer").length).toBe(1);
  });

  it("should render to static HTML", () => {
    const component = render(<Footer />);
    expect(component.text()).toEqual(
      "Creative TimBlogLicenses© 2020, made with  by Creative Tim"
    );
  });
});
