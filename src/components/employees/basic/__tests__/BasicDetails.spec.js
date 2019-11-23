/* eslint-disable no-undef */
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

import BasicDetails from '../BasicDetails';

configure({ adapter: new Adapter() });

describe('EmployeeForm', () => {
  it('should render form', () => {
    const props = {
      name: "Jon",
      gender: 'Male',
      employeeId: 2,
      currentProject: 'London-dreams',
      homeOffice: 'London',
      role: 'Dev'
    };
    let wrapper = shallow(<BasicDetails basicDetails={props}/>);

    expect(wrapper.find('div').length).toBe(6);
    expect(wrapper.getElement('className').props.className).toBe("basic-details");
    expect(wrapper.find('span').length).toBe(2);
  });
});
