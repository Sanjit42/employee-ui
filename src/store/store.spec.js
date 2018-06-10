/* eslint-disable no-undef */
import {createStore} from 'redux';

import rootReducer from '../reducers';
import * as employeeActions from '../actions/employeeActions';

describe('Store', () => {
  it('should handle creating employee', function () {
    const initialState = {};
    const store = createStore(rootReducer, initialState);
    const employee = {
      name: 'ABC',
      employeeId: 68
    };

    const expected = {
      name: 'ABC',
      employeeId: 68
    };
    const action = employeeActions.createEmployeeSuccess(employee);
    store.dispatch(action);

    const actual = store.getState().employees[0];
    expect(actual).toEqual(expected);
  });

  it('should increase length of employees list after creating new employee', function () {
    const initialState = {};
    const employees = [
      {name: 'ABC', employeeId: 68},
      {name: 'JKL', employeeId: 28}
    ];
    const store = createStore(rootReducer, initialState);

    const loadAction = employeeActions.loadEmployeesSuccess(employees);
    store.dispatch(loadAction);

    const actualLoadedEmployees = store.getState();
    expect(actualLoadedEmployees.employees.length).toEqual(2);

    const employee = {
      name: 'DEF',
      employeeId: 48
    };

    const action = employeeActions.createEmployeeSuccess(employee);
    store.dispatch(action);
    const expected = {
      name: 'DEF',
      employeeId: 48
    };

    const actual = store.getState();
    expect(actual.employees.length).toEqual(3);
    expect(actual.employees[2]).toEqual(expected);
  });
});
