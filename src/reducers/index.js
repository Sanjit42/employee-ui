import {combineReducers} from 'redux';
import employees from './employeeReducer';
import homeOffices from './homeOfficesReducer';
import gender from './genderReducer';
import avatar from './avatarReducer';
import technical from './technicalReducer';

const rootReducer = combineReducers({
  employees,
  homeOffices,
  gender,
  avatar,
  technical
});

export default rootReducer;
