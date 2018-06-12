/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';

import BasicDetails from './BasicDetails';

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
    expect(wrapper.find('div').node.props.className).toBe("basic-details");
    expect(wrapper.find('span').length).toBe(2);
  });
});
