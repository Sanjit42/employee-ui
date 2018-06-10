/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as employeeActions from './employeeActions';
import * as types from '../constants/constant';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Employee Actions', () => {
  describe('Create Employee', () => {
    it('should create a CREATE_EMPLOYEE_SUCCESS action', () => {
      const employee = {name: 'Dipto', employeeId: 345};

      const expected = {
        type: types.CREATE_EMPLOYEE_SUCCESS,
        employee: employee
      };

      let action = employeeActions.createEmployeeSuccess(employee);
      expect(action).toEqual(expected);
    });
  });

  describe('Load Employee', () => {
    it('should create a LOAD_EMPLOYEE_SUCCESS action', () => {
      const employees = [{name: 'Dipto', employeeId: 345}, {name: 'Jon', employeeId: 305}];

      const expected = {
        type: types.LOAD_EMPLOYEES_SUCCESS,
        employees: employees
      };

      let action = employeeActions.loadEmployeesSuccess(employees);
      expect(action).toEqual(expected);
    });
  });

  describe('Async Employee Action', () => {
    afterEach(() => {
      nock.cleanAll();
    });
    it('should create BEGIN_AJAX_CALL and LOAD_EMPLOYEES_SUCCESS when loading employees', (done) => {
      const expectedAction = [
        {type: types.BEGIN_AJAX_CALL},
        {
          type: types.LOAD_EMPLOYEES_SUCCESS,
          body: {employees: [{name: 'Dipto', employeeId: 345}, {name: 'Jon', employeeId: 305}]}
        }
      ];
      const store = mockStore({employees: [{}]}, expectedAction);
      store.dispatch(employeeActions.loadEmployees()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.LOAD_EMPLOYEES_SUCCESS);
        done();
      });
    });

    // it('should create BEGIN_AJAX_CALL and AJAX_CALL_ERROR when loading employees', (done) => {
    //   const expectedAction = [
    //     {type: types.BEGIN_AJAX_CALL},
    //     {type: types.AJAX_CALL_ERROR}
    //   ];
    //   const store = mockStore({employees: [{}]}, expectedAction);
    //   store.dispatch(employeeActions.loadEmployees()).then(() => {
    //   }).catch(error => {
    //     const actions = store.getActions();
    //     expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
    //     expect(actions[1].type).toEqual(types.LOAD_EMPLOYEES_SUCCESS);
    //     done();
    //
    //   });
    // });

    it('should create BEGIN_AJAX_CALL and CREATE_EMPLOYEE_SUCCESS when save employee', (done) => {
      const expectedAction = [
        {type: types.BEGIN_AJAX_CALL},
        {
          type: types.CREATE_EMPLOYEE_SUCCESS,
          body: {employees: {name: 'Amit', employeeId: 305}}
        }
      ];
      const store = mockStore({}, expectedAction);
      store.dispatch(employeeActions.saveEmployee({name: 'Amit', employeeId: 345})).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.CREATE_EMPLOYEE_SUCCESS);
        done();
      });
    });

    it('should create BEGIN_AJAX_CALL and AJAX_CALL_ERROR when something wrong to save employee', (done) => {
      const expectedAction = [
        {type: types.BEGIN_AJAX_CALL},
        {type: types.AJAX_CALL_ERROR}
      ];
      const store = mockStore({}, expectedAction);
      store.dispatch(employeeActions.saveEmployee({name: '', employeeId: 305})).then(() => {
      }).catch(error => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.AJAX_CALL_ERROR);
        done();
      });
    });
  });
});
