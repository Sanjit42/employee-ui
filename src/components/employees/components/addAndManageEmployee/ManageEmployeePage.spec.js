/* eslint-disable no-undef,import/named */
import React from 'react';
import {mount} from 'enzyme';

import {ManageEmployeePage} from './ManageEmployeePage';

describe('EmployeePage', () => {
  it('should render input', () => {
    let props = {
      homeOffices: ['Pune', 'Chennai'],
      gender: ['Male', 'Female'],
      onChange: () =>{},
      onSave: () =>{},
      employee: {},
      errors: [],
      saving: true

    };
  });
});
