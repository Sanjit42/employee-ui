/* eslint-disable import/default */
import {combineReducers} from 'redux';
import employees from './employeeReducer';
import homeOffices from './homeOfficesReducer';
import gender from './genderReducer';
import avatar from './avatarReducer';

const rootReducer = combineReducers({
  employees,
  homeOffices,
  gender,
  avatar
});

export default rootReducer;
