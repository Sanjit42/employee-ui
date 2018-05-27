import {beginAjaxCall} from "./ajaxStatueActions";
import employeeApi from "../api/employeeApi";
import * as types from "../constants/constant";

export function updateAvatarSuccess(avatar) {
  return {type: types.UPDATE_AVATAR_SUCCESS, avatar};
}

export function saveAvatar(employee) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return employeeApi.saveAvatar(employee).then(saveAvatar => {
      dispatch(updateAvatarSuccess(saveAvatar));
    }).catch(error => {
      throw (error);
    });
  };
}

