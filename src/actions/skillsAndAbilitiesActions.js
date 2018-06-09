/* eslint-disable import/namespace */
import {beginAjaxCall} from "./ajaxStatueActions";
import * as types from '../constants/constant';
import employeeApi from "../api/employeeApi";
import {loadEmployeesSuccess} from "./employeeActions";
import axios from "axios/index";

export function saveSkillsAndAbilitiesSuccess(skillsAndAbilities) {
  return {type: types.UPDATE_SKILLS_AND_ABILITIES_SUCCESS, skillsAndAbilities};
}

export function loadSkillsAndAbilitiesSuccess(skillsAndAbilities) {
  return {type: types.LOAD_SKILLS_AND_ABILITIES_SUCCESS, skillsAndAbilities};
}

export function loadSkillsAndAbilities() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return employeeApi.getSkillsAndAbilities().then(skillsAndAbilities => {
    // return axios.get("http://localhost:8080/employees/skillsAndAbilities").then(skillsAndAbilities => {
      dispatch(loadSkillsAndAbilitiesSuccess( skillsAndAbilities));
    }).catch(error => {
      throw (error);
    });
  };
}

export function saveSkillsAndAbilities(saveSkillsAndAbilities, id) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return employeeApi.saveSkillsAndAbilities(saveSkillsAndAbilities, id).then(skillsAndAbilities => {
      dispatch(saveSkillsAndAbilitiesSuccess(skillsAndAbilities));
    }).catch(error => {
      throw (error);
    });
  };
}
