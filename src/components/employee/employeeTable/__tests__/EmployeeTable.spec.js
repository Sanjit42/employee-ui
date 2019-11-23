/* eslint-disable no-undef */
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import EmployeeList from '../index';

configure({ adapter: new Adapter() });

describe('EmployeeList', () => {
  it('should render table',() => {
    let employees = [{basicDetails:{}}];
    let wrapper = shallow(<EmployeeList employees={employees}/>);

    expect(wrapper.find('table').length).toEqual(1);
    expect(wrapper.find('table').props().className).toEqual('table');
  });

  it('should render TableHeader and TableBody component',() => {
    let employees = [{basicDetails:{}}];
    let wrapper = shallow(<EmployeeList employees={employees}/>);

    expect(wrapper.find('TableHeader').length).toEqual(1);
    expect(wrapper.find('TableBody').length).toEqual(1);
  });
});
