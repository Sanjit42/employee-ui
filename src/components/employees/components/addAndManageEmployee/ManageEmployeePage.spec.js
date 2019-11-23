/* eslint-disable no-undef,import/named */
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

import {ManageEmployeePage} from './ManageEmployeePage';

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

    const wrapper = shallow(<ManageEmployeePage {...props} />);
    expect(wrapper.find('EmployeeForm').length).toEqual(1);
  });
});
