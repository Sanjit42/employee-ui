/* eslint-disable import/namespace */
import _ from 'lodash';

import * as types from '../constants/constant';
import initialState from './initialState';

function updateSkills(state, action) {
  let toChange = state.filter(each => each.employeeId === action.skills.employeeId);
  let keys = Object.keys(action.skills);
  let subsets = _.pull(keys, "employeeId");
  let updatedSkills = toChange[0];

  subsets.map(each => {
    let subset = {};
    let updateSubset = Object.assign({}, updatedSkills[each], action.skills[each]);
    subset[each] = updateSubset;
    updatedSkills = Object.assign({}, updatedSkills, subset);
  });

  return updatedSkills;
}

export default function ratingReducer(state = initialState.skills, action) {
  switch (action.type) {
    case types.UPDATE_SKILLS_SUCCESS:
      return [
        ...state.filter(each => each.employeeId !== action.skills.employeeId),
        Object.assign({}, updateSkills(state, action))
      ];
    case types.LOAD_SKILLS_SUCCESS:
      return action.skills;
    default:
      return state;
  }
}
