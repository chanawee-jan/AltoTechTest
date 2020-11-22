import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Alarm from '../components/Alarm/Alarm';
describe('<App />', () => {
  it('should render without throwing an error', () => {
    const component = shallow(<Alarm />);
    expect(component.find('#currentTime')).toHaveLength(1);
    expect(component.find('#currentTime')).toHaveLength(1);
    expect(component.find('#timeForm')).toHaveLength(1);
    expect(component.find('#timeInput')).toHaveLength(1);
  });

  it('should mount in a full DOM', () => {
    const component = mount(<Alarm />);
    expect(component.find('Alarm').length).toBe(1);
  });

  it('should render to static HTML', () => {
    const component = render(<Alarm />);
    expect(component.text()).toEqual('It is .');
  });
});