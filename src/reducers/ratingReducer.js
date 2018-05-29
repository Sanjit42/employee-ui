import React from 'react';
import * as types from '../constants/constant';

export default function genderReducer(state = [], actions) {
  switch (actions.type) {
    case types.LOAD_RATING_SUCCESS:
      return actions.rating;
    case types.UPDATE_RATING_SUCCESS:
      return actions.rating;
    default:
      return state;
  }
}
