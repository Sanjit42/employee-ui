/* eslint-disable no-undef */
import React from 'react';

import * as types from '../../constants/constant';
import employeeReducer from '../employeeReducer';

describe('Employee Reducer', () => {
  it('should return default state when action type does not match', () => {
    let action = {
      type: 'UPDATE_EMPLOYEE_SUCCESS',
      employee: [{}]
    };
    let initialState = [];
    let wrapper = employeeReducer(initialState, action);
    expect(wrapper).toEqual([]);
  });

  it('should load employees', () => {
    let initialState = [];
    const action = {
      type: types.LOAD_EMPLOYEES_SUCCESS,
      employees: [{
        name: 'Abhik Roy',
        gender: 'Male',
        role: 'Developer',
        projectExperience: [{project: 'ThoughtWorks', subProject: 'step', from: "10-02-2017", to: '02-03-2018'}],
        leaveHistory: [{type: 'Annual Leave', from: '1-03-2018', to: '14-03-2018'}]
      }]
    };

    let wrapper = employeeReducer(initialState, action);
    expect(wrapper.length).toEqual(1);
  });

  it('should add new employee', () => {
    let initialState = [{
      name: 'Abhik Roy',
      gender: 'Male',
      employeeId: 21322,
      role: 'Developer'
    }];
    const action = {
      type: types.CREATE_EMPLOYEE_SUCCESS,
      employee:
        {
          name: 'Abhik Roy',
          gender: 'Male',
          employeeId: 21322,
          currentProject: 'Beach',
          homeOffice: 'Hyderabad',
          role: 'Developer',
          projectExperience: [{project: 'ThoughtWorks', subProject: 'step', from: "10-02-2017", to: '02-03-2018'}],
          leaveHistory: [{type: 'Annual Leave', from: '1-03-2018', to: '14-03-2018'}]
        }
    };
    let wrapper = employeeReducer(initialState, action);
    expect(wrapper.length).toEqual(2);
  });
});
