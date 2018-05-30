/* eslint-disable import/default */
import {combineReducers} from 'redux';

import ajaxCallsInProgress from './ajaxStatusReducer';
import employees from './employeeReducer';
import homeOffices from './homeOfficesReducer';
import gender from './genderReducer';
import avatar from './avatarReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  employees,
  homeOffices,
  gender,
  avatar
});

export default rootReducer;
