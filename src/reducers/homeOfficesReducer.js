import * as types from '../constants/constant';
import initialState from './initialState';

export default function homeOfficesReducer (state = initialState.homeOffices, actions){
  switch (actions.type){
    case types.LOAD_HOME_OFFICE_SUCCESS:
      return actions.homeOffices;
    default:
      return state;
  }
}
