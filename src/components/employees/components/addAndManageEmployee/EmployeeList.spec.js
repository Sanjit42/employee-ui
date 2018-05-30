import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import EmployeeList from './EmployeeList';

describe('EmployeeList', () => {
  it('should render table',() => {
    let employees = [{basicDetails:{}}];
    let wrapper = shallow(<EmployeeList employees={employees}/>);
    expect(wrapper.find('table').length).toBe(1);
    expect(wrapper.find('table').props().className).toBe('table');
  });

  it('should render EmployeeListRow',() => {
    let employees = [{basicDetails:{}}];
    let wrapper = shallow(<EmployeeList employees={employees}/>);
    expect(wrapper.find('EmployeeListRow').length).toBe(1);
  });
});
