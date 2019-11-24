/* eslint-disable import/namespace */
import {beginAjaxCall} from "./ajaxStatueActions";
import * as types from '../constants/constant';
import employeeApi from "../api/employeeApi";
import {loadEmployeesSuccess} from "./employeeActions";
import axios from "axios/index";

export function saveSkillsSuccess(skills) {
  return {type: types.UPDATE_SKILLS_SUCCESS, skills};
}

export function loadSkillsSuccess(skills) {
  return {type: types.LOAD_SKILLS_SUCCESS, skills};
}

export function loadSkills() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return employeeApi.getSkills().then(skills => {
    // return axios.get("http://localhost:8080/employees/skills").then(res => {
      dispatch(loadSkillsSuccess( skills));
    }).catch(error => {
      throw (error);
    });
  };
}

export function saveSkills(skills, id) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return employeeApi.saveSkills(skills, id).then(skills => {
      dispatch(saveSkillsSuccess(skills));
    }).catch(error => {
      throw (error);
    });
  };
}
