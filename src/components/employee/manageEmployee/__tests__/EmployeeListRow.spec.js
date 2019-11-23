/* eslint-disable no-undef */
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import EmployeeListRow from '../EmployeeListRow';

configure({ adapter: new Adapter() });

describe('EmployeeListRow', () => {
  it('should render Link', () => {
    let employee = {};
    let wrapper = shallow(<EmployeeListRow employee={employee}/>);
    expect(wrapper.find('Link').length).toEqual(1);
  });
});
