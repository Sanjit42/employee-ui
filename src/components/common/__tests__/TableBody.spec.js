/* eslint-disable no-undef */
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TableBody from '../TableBody';
import {Link} from "react-router-dom";

configure({adapter: new Adapter()});

describe('TableBody', () => {
  it('should render Link', () => {
    const props = {
      data: [{
        name: 'Abc',
        gender: 'Male',
        employeeId: 1

      }],
      columns: [{
        path: 'name',
        label: 'Name',
        content: employee => <Link to={`/employees/${employee.employeeId}`}> {employee.name} </Link>
      }]
    };
    let wrapper = shallow(<TableBody {...props}/>);

    expect(wrapper.find('Link').length).toEqual(1);
  });
});
