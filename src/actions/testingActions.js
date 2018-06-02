import {beginAjaxCall} from "./ajaxStatueActions";
import employeeApi from "../api/employeeApi";
import * as types from "../constants/constant";

export function loadTestingSkillsSuccess(testingSkills) {
  return {type: types.LOAD_TESTING_SKILLS_SUCCESS, testingSkills};
}
export function loadTestingSkills(testingSkills, id) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return employeeApi.loadTestingSkills(testingSkills, id).then(testingSkills => {
      dispatch(loadTestingSkillsSuccess(testingSkills));
    }).catch(error => {
      throw (error);
    });
  };
}
