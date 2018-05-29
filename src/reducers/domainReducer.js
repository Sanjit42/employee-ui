import React from 'react';
import * as types from '../constants/constant';

export default function domainReducer(state = [], actions) {
  switch (actions.type) {
    case types.LOAD_DOMAIN_SUCCESS:
      return actions.domain;
    default:
      return state;
  }
}
