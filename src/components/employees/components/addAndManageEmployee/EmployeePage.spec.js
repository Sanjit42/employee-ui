/* eslint-disable no-undef */
import React from 'react';
import {mount} from 'enzyme';

import {EmployeePage} from './EmployeePage';

describe('EmployeePage', () => {
  it('should render input', () => {
    let employees = [{basicDetails: {}}];
    let wrapper = mount(<EmployeePage employees={employees} actions={{}}/>);

    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('input').props().value).toBe('Add Employee');
  });

  it('should not render EmployeeList when employees length is less than 1', () => {
    let employees = [];
    let wrapper = mount(<EmployeePage employees={employees} actions={{}}/>);

    expect(wrapper.find('EmployeeList').length).toBe(0);
  });

  it('should render EmployeeList when employees length is greater than 0', () => {
    let employees = [{basicDetails: {}}];
    let wrapper = mount(<EmployeePage employees={employees} actions={{}}/>);

    expect(wrapper.find('EmployeeList').length).toBe(1);
  });

  it('should get response when click on save button', () => {
    let employees = [{basicDetails: {}}];
    let wrapper = mount(<EmployeePage employees={employees} actions={{}}/>);
    let saveButton = wrapper.find('input').last();

    expect(saveButton.prop('type')).toBe('submit');
    // saveButton.simulate('click');
  });
});
