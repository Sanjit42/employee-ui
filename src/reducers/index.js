/* eslint-disable import/default */
import {combineReducers} from 'redux';

import ajaxCallsInProgress from './ajaxStatusReducer';
import employees from './employeeReducer';
import homeOffices from './homeOfficesReducer';
import gender from './genderReducer';
import avatar from './avatarReducer';
import rating from './ratingReducer';
import technicalRating from './technicalRatingReducer';
import technical from './technicalReducer';
import testing from './testingReducer';
import consulting from './consultingReducer';
import domain from './domainReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  employees,
  homeOffices,
  gender,
  avatar,
  rating,
  technical,
  testing,
  domain,
  consulting,
  technicalRating
});

export default rootReducer;
