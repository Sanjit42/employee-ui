import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import EmployeeListRow from './EmployeeListRow';

describe('EmployeeListRow', () => {
  it('should render Link', () => {
    let employee = {};
    let wrapper = shallow(<EmployeeListRow employee={employee}/>);
    expect(wrapper.find('Link').length).toBe(1);
  });
});
