/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';

import EmployeeListRow from './EmployeeListRow';

describe('EmployeeListRow', () => {
  it('should render Link', () => {
    let employee = {};
    let wrapper = shallow(<EmployeeListRow employee={employee}/>);
    expect(wrapper.find('Link').length).toEqual(1);
  });
});
