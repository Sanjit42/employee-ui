/* eslint-disable import/namespace */
import employeeApi from '../api/employeeApi';
import * as types from '../constants/constant';
import {beginAjaxCall} from "./ajaxStatueActions";

export function loadDomainSuccess(domain) {
  return {type: types.LOAD_DOMAIN_SUCCESS, domain};
}
export function loadDomain() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return employeeApi.getDomain().then(domain => {
      dispatch(loadDomainSuccess(domain));
    }).catch(error => {
      throw (error);
    });
  };
}
