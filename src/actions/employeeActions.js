import employeeApi from '../api/employeeApi';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatueActions";
import * as types from '../constants/constant';
import axios from 'axios';

export function createEmployeeSuccess(employee) {
  return {type: types.CREATE_EMPLOYEE_SUCCESS, employee};
}

export function createEmployee(employee) {
  return {type: types.CREATE_EMPLOYEE_SUCCESS, employee};
}

export function updateEmployeeSuccess(employee) {
  return {type: types.UPDATE_EMPLOYEE_SUCCESS, employee};
}

export function loadEmployeesSuccess(employees) {
  return {type: types.LOAD_EMPLOYEES_SUCCESS, employees};
}

export function loadEmployees() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return employeeApi.getAllEmployees().then(employees => {
    // return axios.get("http://localhost:8080/employees").then(employees => {
      dispatch(loadEmployeesSuccess(employees));
    }).catch(error => {
      throw (error);
    });
  };
}


export function saveEmployee(employee) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return employeeApi.saveEmployee(employee).then(saveEmployee => {
      employee.id ? dispatch(updateEmployeeSuccess(saveEmployee)) : dispatch(createEmployeeSuccess(saveEmployee));
    }).catch(error => {
      throw (error);
    });
  };
}
