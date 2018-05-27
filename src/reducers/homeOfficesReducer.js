import React from 'react';
import * as types from '../constants/constant';

export default function homeOfficesReducer (state = [], actions){
  switch (actions.type){
    case types.LOAD_HOME_OFFICE_SUCCESS:
      return actions.homeOffices;
    default:
      return state;
  }
}
