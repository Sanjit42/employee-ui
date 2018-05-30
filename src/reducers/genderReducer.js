import * as types from '../constants/constant';
import initialState from './initialState';

export default function genderReducer(state = initialState.gender, actions) {
  switch (actions.type) {
    case types.LOAD_GENDER_SUCCESS:
      return actions.gender;
    default:
      return state;
  }
}
