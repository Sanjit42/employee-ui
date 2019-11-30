import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TableHeader from '../TableHeader';
import {Link} from "react-router-dom";

configure({adapter: new Adapter()});

describe('TableHeader', () => {
  it('should render Link', () => {
    const columns = [{
        path: 'name',
        label: 'Name',
        content: employee => <Link to={`/employees/${employee.employeeId}`}> {employee.name} </Link>
      }];

    let wrapper = shallow(<TableHeader columns={columns}/>);

    expect(wrapper.find('thead').length).toEqual(1);
  });
});
