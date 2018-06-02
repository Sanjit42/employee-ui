import {beginAjaxCall} from "./ajaxStatueActions";
import employeeApi from "../api/employeeApi";
import * as types from "../constants/constant";

export function loadDomainSkillsSuccess(domainSkills) {
  return {type: types.LOAD_DOMAIN_SKILLS_SUCCESS, domainSkills};
}

export function loadDomainSkills(domainSkills, id) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return employeeApi.loadDomainSkills(domainSkills, id).then(domainSkills => {
      dispatch(loadDomainSkillsSuccess(domainSkills));
    }).catch(error => {
      throw (error);
    });
  };
}
