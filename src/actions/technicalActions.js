import employeeApi from '../api/employeeApi';
import * as types from '../constants/constant';
import {beginAjaxCall} from "./ajaxStatueActions";

export function loadTechnicalSuccess(technical) {
  return {type: types.LOAD_TECHNICAL_SUCCESS, technical};
}
export function loadTechnical() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return employeeApi.getTechnical().then(technical => {
      dispatch(loadTechnicalSuccess(technical));
    }).catch(error => {
      throw (error);
    });
  };
}
