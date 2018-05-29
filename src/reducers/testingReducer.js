import React from 'react';
import * as types from '../constants/constant';

export default function testingReducer(state = [], actions) {
  switch (actions.type) {
    case types.LOAD_TESTING_SUCCESS:
      return actions.testing;
    default:
      return state;
  }
}
