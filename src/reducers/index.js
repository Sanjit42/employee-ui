/* eslint-disable import/default */
import {combineReducers} from 'redux';

import ajaxCallsInProgress from './ajaxStatusReducer';
import skills from './capabilityReducer';
import employees from './employeeReducer';
import homeOffices from './homeOfficesReducer';
import gender from './genderReducer';
import avatar from './avatarReducer';
import rating from './ratingReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  skills,
  employees,
  homeOffices,
  gender,
  avatar,
  rating
});

export default rootReducer;
