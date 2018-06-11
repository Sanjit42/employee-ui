/* eslint-disable import/namespace */
import _ from 'lodash';

import * as types from '../constants/constant';
import initialState from './initialState';

function updateSkills(state, action) {
  let toChange = state.filter(each => each.employeeId === action.skillsAndAbilities.employeeId);
  let keys = Object.keys(action.skillsAndAbilities);
  let subsets = _.pull(keys, "employeeId");
  let updatedSkills = toChange[0];

  subsets.map(each => {
    let subset = {};
    let updateSubset = Object.assign({}, toChange[0][each], action.skillsAndAbilities[each]);
    subset[each] = updateSubset;
    updatedSkills = Object.assign({}, updatedSkills, subset);
  });

  return updatedSkills;
}

export default function ratingReducer(state = initialState.skillsAndAbilities, action) {
  switch (action.type) {
    case types.UPDATE_SKILLS_AND_ABILITIES_SUCCESS:
      return [
        ...state.filter(each => each.employeeId !== action.skillsAndAbilities.employeeId),
        Object.assign({}, updateSkills(state, action))
      ];
    case types.LOAD_SKILLS_AND_ABILITIES_SUCCESS:
      return action.skillsAndAbilities;
    default:
      return state;
  }
}
