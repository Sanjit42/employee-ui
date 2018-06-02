/* eslint-disable import/namespace */
import {beginAjaxCall} from "./ajaxStatueActions";
import employeeApi from "../api/employeeApi";
import * as types from "../constants/constant";

export function updateAvatarSuccess(avatar) {
  return {type: types.UPDATE_AVATAR_SUCCESS, avatar};
}

export function loadAvatarSuccess(avatar) {
  return {type: types.LOAD_AVATAR_SUCCESS, avatar};
}

export function saveAvatar(avatar) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return employeeApi.saveAvatar(avatar).then(saveAvatar => {
      dispatch(updateAvatarSuccess(saveAvatar));
    }).catch(error => {
      throw (error);
    });
  };
}

export function loadAvatar() {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return employeeApi.loadAvatar().then(saveAvatar => {
      dispatch(loadAvatarSuccess(saveAvatar));
    }).catch(error => {
      throw (error);
    });
  };
}

