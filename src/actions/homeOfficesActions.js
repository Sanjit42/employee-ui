import employeeApi from '../api/employeeApi';
import * as types from '../constants/constant';
import {beginAjaxCall} from "./ajaxStatueActions";


export function loadHomeOfficeSuccess(homeOffices) {
  return {type: types.LOAD_HOME_OFFICE_SUCCESS, homeOffices};
}
export function loadHomeOffices() {
  return function(dispatch){
    dispatch(beginAjaxCall());
    return employeeApi.getAllHomeOffices().then(homeOffices => {
      dispatch(loadHomeOfficeSuccess(homeOffices));
    }).catch(error => {
      throw (error);
    });
  };
}
