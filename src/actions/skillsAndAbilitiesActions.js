/* eslint-disable import/namespace */
import {beginAjaxCall} from "./ajaxStatueActions";
import * as types from '../constants/constant';
import employeeApi from "../api/employeeApi";

export function saveSkillsAndAbilitiesSuccess(skillsAndAbilities) {
  return {type: types.SAVE_SKILLS_AND_ABILITIES_SUCCESS, saveSkillsAndAbilities: skillsAndAbilities};
}

export function saveSkillsAndAbilities(saveSkillsAndAbilities, id) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return employeeApi.saveSkillsAndAbilities(saveSkillsAndAbilities, id).then(saveSkillsAndAbilities => {
      dispatch(saveSkillsAndAbilitiesSuccess(saveSkillsAndAbilities));
    }).catch(error => {
      throw (error);
    });
  };
}
