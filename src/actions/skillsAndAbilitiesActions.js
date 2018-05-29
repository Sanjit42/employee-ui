/* eslint-disable import/namespace */
import employeeApi from '../api/employeeApi';
import * as types from '../constants/constant';
import {beginAjaxCall} from "./ajaxStatueActions";

export function loadSkillsAndAbilitiesSuccess(skillsAndAbilities) {
  return {type: types.LOAD_SKILLS_AND_ABILITIES_SUCCESS, skillsAndAbilities};
}
export function loadSkillsAndAbilities() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return employeeApi.getSkillsAndAbilities().then(skillsAndAbilities => {
      dispatch(loadSkillsAndAbilitiesSuccess(skillsAndAbilities));
    }).catch(error => {
      throw (error);
    });
  };
}
