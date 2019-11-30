/* eslint-disable import/namespace */
import axios from "axios";
import {beginAjaxCall} from "./ajaxStatueActions";
import * as types from '../constants/constant';
import { getUpdatedSkills } from "../utils";

export function saveSkillsSuccess(skills) {
  return {type: types.UPDATE_SKILLS_SUCCESS, skills};
}

export function loadSkillsSuccess(skills) {
  return {type: types.LOAD_SKILLS_SUCCESS, skills};
}

export function loadSkills() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return axios.get("http://localhost:8080/employees/skills").then(res => {
      dispatch(loadSkillsSuccess(res.data));
    }).catch(error => {
      throw (error);
    });
  };
}

export function saveSkills(skills, rating, id) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios.put("http://localhost:8080/employee/skills", getUpdatedSkills(rating, skills, id) )
      .then(res => {
      dispatch(saveSkillsSuccess(res.data));
    }).catch(error => {
      throw (error);
    });
  };
}
