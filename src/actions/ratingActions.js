/* eslint-disable import/namespace */
import {beginAjaxCall} from "./ajaxStatueActions";
import * as types from '../constants/constant';
import employeeApi from "../api/employeeApi";

export function updateRatingSuccess(rating) {
  return {type: types.UPDATE_RATING_SUCCESS, rating};
}

export function updateRatingValue(rating, title,id, template) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return employeeApi.updateRatingValue(rating, title, id, template).then(updateRating => {
      dispatch(updateRatingSuccess(updateRating));
    }).catch(error => {
      throw (error);
    });
  };
}
