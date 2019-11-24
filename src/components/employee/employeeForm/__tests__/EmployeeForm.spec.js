/* eslint-disable no-undef,import/named */
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

import {EmployeeForm} from '../index';

configure({ adapter: new Adapter() });

describe('EmployeePage', () => {
  it('should render input', () => {
    let props = {
      homeOffices: ['Pune', 'Chennai'],
      gender: ['Male', 'Female'],
      onChange: jest.fn(),
      onSave: jest.fn(),
      employee: {},
      errors: [],
      saving: true,
      actions: {}
    };

    const wrapper = shallow(<EmployeeForm {...props} />);
    expect(wrapper.find('Form').length).toEqual(1);
  });
});
