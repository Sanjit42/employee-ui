/* eslint-disable import/namespace */
import _ from 'lodash';

import * as types from '../constants/constant';
import initialState from './initialState';

export default function ratingReducer(state = initialState.skillsAndAbilities, action) {
  switch (action.type) {
    case types.UPDATE_SKILLS_AND_ABILITIES_SUCCESS:
      return [
        ...state.filter(each => each.employeeId !== action.skillsAndAbilities.employeeId),
        Object.assign({}, action.skillsAndAbilities)
      ];
    case types.LOAD_SKILLS_AND_ABILITIES_SUCCESS:
      return action.skillsAndAbilities;
    default:
      return state;
  }
}
