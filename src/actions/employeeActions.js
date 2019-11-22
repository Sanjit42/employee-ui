import employeeApi from '../api/employeeApi';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatueActions";
import * as types from '../constants/constant';
import axios from 'axios';

export function createEmployeeSuccess(employee) {
  return {type: types.CREATE_EMPLOYEE_SUCCESS, employee};
}

export function loadEmployeesSuccess(employees) {
  return {type: types.LOAD_EMPLOYEES_SUCCESS, employees};
}

export function loadEmployees() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return employeeApi.getAllEmployees().then(employees => {
    //   return axios.get("http://localhost:8080/employees").then(res => {
      dispatch(loadEmployeesSuccess( employees));
    }).catch(error => {
      throw (error);
    });
  };
}


export function saveEmployee(employee) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return employeeApi.saveEmployee(employee).then(saveEmployee => {
    // return axios.post("http://localhost:8080/employee", employee.basicDetails).then(res => {
    //   if (res.status == 200) {
        dispatch(createEmployeeSuccess(employee));
      // }
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
