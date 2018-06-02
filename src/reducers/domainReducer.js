/* eslint-disable import/namespace */
import * as types from '../constants/constant';
import initialState from './initialState';

export default function ratingReducer(state = initialState.domain, action) {
  switch (action.type) {

    case types.LOAD_DOMAIN_SKILLS_SUCCESS:
      return action.domainSkills;

    default:
      return state;
  }
}
