/* eslint-disable import/namespace */
import employeeApi from '../api/employeeApi';
import * as types from '../constants/constant';
import {beginAjaxCall} from "./ajaxStatueActions";

export function loadConsultingSuccess(consulting) {
  return {type: types.LOAD_CONSULTING_SUCCESS, consulting};
}
export function loadConsulting() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return employeeApi.getConsulting().then(consulting => {
      dispatch(loadConsultingSuccess(consulting));
    }).catch(error => {
      throw (error);
    });
  };
}
