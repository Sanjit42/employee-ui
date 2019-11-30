import employeeApi from '../api/employeeApi';
import * as types from '../constants/constant';
import {beginAjaxCall} from "./ajaxStatueActions";

export function loadGenderSuccess(gender) {
  return {type: types.LOAD_GENDER_SUCCESS, gender};
}

export function loadGender() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return employeeApi.getGenderList().then(gender => {
      dispatch(loadGenderSuccess(gender));
    }).catch(error => {
      throw (error);
    });
  };
}
