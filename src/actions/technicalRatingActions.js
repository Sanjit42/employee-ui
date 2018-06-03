/* eslint-disable import/namespace */
import {beginAjaxCall} from "./ajaxStatueActions";
import * as types from '../constants/constant';
import employeeApi from "../api/employeeApi";

export function updateTechnicalRatingSuccess(updateRating) {
  return {type: types.UPDATE_TECHNICAL_RATING_SUCCESS, updateRating};
}

export function updateTechnicalRating(rating, titleratingObj, id) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return employeeApi.updateTechnicalSkills(rating, titleratingObj, id).then(updateRating => {
      dispatch(updateTechnicalRatingSuccess(updateRating));
    }).catch(error => {
      throw (error);
    });
  };
}
