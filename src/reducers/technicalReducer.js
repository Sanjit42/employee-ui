/* eslint-disable import/namespace */
import * as types from '../constants/constant';
import initialState from './initialState';

export default function ratingReducer(state = initialState.technical, action) {
  switch (action.type) {

    case types.LOAD_TECHNICAL_SKILLS_SUCCESS:
      return action.technicalSkills;
    default:
      return state;
  }
}
