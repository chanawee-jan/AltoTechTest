import React from "react";
import { shallow, mount, render } from "enzyme";
import Rooms from "../views/Rooms";
describe("<Rooms />", () => {
  it("should render without throwing an error", () => {
    const component = shallow(<Rooms />);
    expect(component.find("Row")).toHaveLength(1);
    expect(component.find("Col")).toHaveLength(1);
    expect(component.find("Card")).toHaveLength(1);
    expect(component.find("CardBody")).toHaveLength(1);
    expect(component.find("CardHeader")).toHaveLength(1);
    expect(component.find("Room")).toHaveLength(0);
  });
  
  it("should mount in a full DOM", () => {
    const component = mount(<Rooms />);
    expect(component.find("Rooms").length).toBe(1);
  });

  it("should render to static HTML", () => {
    const component = render(<Rooms />);
    expect(component.text()).toEqual(
      "Roomsnull"
    );
  });
});
