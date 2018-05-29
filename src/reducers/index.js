import {combineReducers} from 'redux';
import employees from './employeeReducer';
import homeOffices from './homeOfficesReducer';
import gender from './genderReducer';
import avatar from './avatarReducer';
import technical from './technicalReducer';
import rating from './ratingReducer';
import consulting from './consultingReducer';
import testing from './testingReducer';
import domain from './domainReducer';

const rootReducer = combineReducers({
  employees,
  homeOffices,
  gender,
  avatar,
  technical,
  rating,
  consulting,
  testing,
  domain
});

export default rootReducer;
