import {beginAjaxCall} from "./ajaxStatueActions";
import employeeApi from "../api/employeeApi";
import * as types from "../constants/constant";

export function loadConsultingSkillsSuccess(consultingSkills) {
  return {type: types.LOAD_CONSULTING_SKILLS_SUCCESS, consultingSkills};
}

export function loadConsultingSkills(consultingSkills, id) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return employeeApi.loadConsultingSkills(consultingSkills, id).then(loadConsultingSkills => {
      dispatch(loadConsultingSkillsSuccess(loadConsultingSkills));
    }).catch(error => {
      throw (error);
    });
  };
}
