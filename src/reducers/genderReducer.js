import React from 'react';
import * as types from '../constants/constant';

export default function genderReducer(state = [], actions) {
  switch (actions.type) {
    case types.LOAD_GENDER_SUCCESS:
      return actions.gender;
    default:
      return state;
  }
}
