import {beginAjaxCall} from "./ajaxStatueActions";
import employeeApi from "../api/employeeApi";
import * as types from "../constants/constant";

export function loadTechnicalSkillsSuccess(technicalSkills) {
  return {type: types.LOAD_TECHNICAL_SKILLS_SUCCESS, technicalSkills};
}

export function loadTechnicalSkills(technicalSkills, id) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return employeeApi.loadTechnicalSkills(technicalSkills, id).then(TechnicalSkills => {
      dispatch(loadTechnicalSkillsSuccess(TechnicalSkills));
    }).catch(error => {
      throw (error);
    });
  };
}

export function updateTechnicalRatingSuccess(updateRating) {
  return {type: types.UPDATE_TECHNICAL_SKILLS_SUCCESS, updateRating};
}

export function updateTechnicalSkills(rating, titleratingObj, id) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return employeeApi.updateTechnicalSkills(rating, titleratingObj, id).then(updateRating => {
      dispatch(updateTechnicalRatingSuccess(updateRating));
    }).catch(error => {
      throw (error);
    });
  };
}
