/* eslint-disable import/namespace */
import * as types from '../constants/constant';
import initialState from './initialState';

export default function ratingReducer(state = initialState.testing, action) {
  switch (action.type) {

    case types.LOAD_TESTING_SKILLS_SUCCESS:
      return action.testingSkills;
    default:
      return state;
  }
}
