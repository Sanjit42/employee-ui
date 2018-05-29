/* eslint-disable import/namespace */
import employeeApi from '../api/employeeApi';
import * as types from '../constants/constant';
import {beginAjaxCall} from "./ajaxStatueActions";

export function loadTestingSuccess(testing) {
  return {type: types.LOAD_TESTING_SUCCESS, testing};
}
export function loadTesting() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return employeeApi.getTesting().then(testing => {
      dispatch(loadTestingSuccess(testing));
    }).catch(error => {
      throw (error);
    });
  };
}
