import React from 'react';
import {expect} from 'chai';

import * as types from '../constants/constant';
import employeeReducer from './employeeReducer';

describe('Employee Reducer', () => {
  it('should return default state when action type does not match', function () {
    let action = {
      type: 'UPDATE_EMPLOYEE_SUCCESS',
      employee: {}
    };
    let initialState = [];
    let wrapper = employeeReducer(initialState, action);
    expect(wrapper).to.deep.equal([]);
  });

  it('should load employees', function () {
    let initialState = [];
    const action = {
      type: types.LOAD_EMPLOYEES_SUCCESS,
      employees: [
        {
          basicDetails:
            {
              name: 'Abhik Roy',
              gender: 'Male',
              role: 'Developer'
            },
          skillsAndAbilities: [
            {testing: [{'capybara': 2}]}
          ],
          projectExperience: [{project: 'ThoughtWorks', subProject: 'step', from: "10-02-2017", to: '02-03-2018'}],
          leaveHistory: [{type: 'Annual Leave', from: '1-03-2018', to: '14-03-2018'}]
        }]
    };

    let wrapper = employeeReducer(initialState, action);
    expect(wrapper.length).to.equal(1);
  });

  it('should add new employee', function () {
    let initialState = [{
      basicDetails:
        {
          name: 'Abhik Roy',
          gender: 'Male',
          employeeId: 21322,
          role: 'Developer'
        }
    }];
    const action = {
      type: types.CREATE_EMPLOYEE_SUCCESS,
      employee:
        {
          basicDetails:
            {
              name: 'Abhik Roy',
              gender: 'Male',
              employeeId: 21322,
              currentProject: 'Beach',
              homeOffice: 'Hyderabad',
              role: 'Developer'
            },
          skillsAndAbilities: [
            {technical: [{'AWS': 2}, {'Java': 3}]},
            {testing: [{'capybara': 2}]}
          ],
          projectExperience: [{project: 'ThoughtWorks', subProject: 'step', from: "10-02-2017", to: '02-03-2018'}],
          leaveHistory: [{type: 'Annual Leave', from: '1-03-2018', to: '14-03-2018'}]
        }
    };
    let wrapper = employeeReducer(initialState, action);
    expect(wrapper.length).to.equal(2);
  });
});
