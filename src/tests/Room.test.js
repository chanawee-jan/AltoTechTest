import React from "react";
import { shallow, mount, render } from "enzyme";
import Room from "../components/Room/Room";
describe("<Room />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(<Room />);
    expect(component.find("Container")).toHaveLength(0);
    expect(component.find("RoomInterface")).toHaveLength(0);
    expect(component.find("RoomNo")).toHaveLength(0);
    expect(component.find("Modal")).toHaveLength(0);
    expect(component.find("Fade")).toHaveLength(0);
    expect(component.find("RoomModalContainer")).toHaveLength(0);
    expect(component.find("InputGroColupAddon")).toHaveLength(0);
    expect(component.find("Col")).toHaveLength(8);
    expect(component.find("Card")).toHaveLength(3);
    expect(component.find("CardHeader")).toHaveLength(1);
    expect(component.find("Title")).toHaveLength(0);
    expect(component.find("Info")).toHaveLength(0);
  });
  
  it("should mount in a full DOM", () => {
    const component = mount(<Room />);
    expect(component.find("Room").length).toBe(1);
  });

  it("should render to static HTML", () => {
    const component = render(<Room />);
    expect(component.text()).toEqual(
      ""
    );
  });
});
