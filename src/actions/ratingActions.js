import * as types from "../constants/constant";
import {beginAjaxCall} from "./ajaxStatueActions";
import employeeApi from "../api/employeeApi";

export function loadRatingSuccess(rating) {
  return {type: types.LOAD_RATING_SUCCESS, rating};
}

export function updateRatingSuccess(rating) {
  return {type: types.UPDATE_RATING_SUCCESS, rating};
}
export function loadRating() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return employeeApi.getRatingList().then(rating => {
      dispatch(loadRatingSuccess(rating));
    }).catch(error => {
      throw (error);
    });
  };
}

export function saveRating(rating, title) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return employeeApi.saveRating(rating, title).then(saveRating => {
      dispatch(updateRatingSuccess(saveRating));
    }).catch(error => {
      throw (error);
    });
  };
}
