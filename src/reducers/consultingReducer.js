import React from 'react';
import * as types from '../constants/constant';

export default function consultingReducer(state = [], actions) {
  switch (actions.type) {
    case types.LOAD_CONSULTING_SUCCESS:
      return actions.consulting;
    default:
      return state;
  }
}
