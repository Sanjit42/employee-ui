import React from 'react';
import * as types from '../constants/constant';

export default function technicalReducer(state = [], actions) {
  switch (actions.type) {
    case types.LOAD_TECHNICAL_SUCCESS:
      return actions.technical;
    default:
      return state;
  }
}
