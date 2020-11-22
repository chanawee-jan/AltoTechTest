import React from "react";
import { shallow, mount, render } from "enzyme";
import Schedule from "../views/Schedule";
describe("<Schedule />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(<Schedule />);
    expect(component.find(".content")).toHaveLength(1);
    expect(component.find("Col")).toHaveLength(3);
    expect(component.find("Card")).toHaveLength(1);
    expect(component.find("CardBody")).toHaveLength(1);
    expect(component.find("NotificationAlert")).toHaveLength(1);
    expect(component.find("Alarm")).toHaveLength(1);
  });
  
  it("should mount in a full DOM", () => {
    const component = mount(<Schedule />);
    expect(component.find("Schedule").length).toBe(1);
  });

  it("should render to static HTML", () => {
    const component = render(<Schedule />);
    expect(component.text()).toEqual(
      "NotificationsIt is ."
    );
  });
});
