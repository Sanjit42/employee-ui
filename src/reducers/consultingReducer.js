/* eslint-disable import/namespace */
import * as types from '../constants/constant';
import initialState from './initialState';

export default function ratingReducer(state = initialState.consulting, action) {
  switch (action.type) {

    case types.LOAD_CONSULTING_SKILLS_SUCCESS:
      return action.consultingSkills;
    default:
      return state;
  }
}
