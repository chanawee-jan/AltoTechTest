import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Alarm from '../components/Alarm/Alarm';
describe('<App />', () => {
  it('should render without throwing an error', () => {
    const component = shallow(<Alarm />);
    expect(component.contains(<h1>Hello React App</h1>)).toBe(true);
  });
  it('should mount in a full DOM', () => {
    const component = mount(<Alarm />);
    expect(component.find('.app').length).toBe(1);
  });
  it('should render to static HTML', () => {
    const component = render(<Alarm />);
    expect(component.text()).toEqual('Hello React App');
  });
});