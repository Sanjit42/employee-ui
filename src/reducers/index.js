/* eslint-disable import/default */
import {combineReducers} from 'redux';
import employees from './employeeReducer';
import homeOffices from './homeOfficesReducer';
import gender from './genderReducer';
import avatar from './avatarReducer';
// import rating from './ratingReducer';
import skillsAndAbilities from './skillsAndAbilitiesReducer';

const rootReducer = combineReducers({
  employees,
  homeOffices,
  gender,
  avatar,
  // rating,
  skillsAndAbilities
});

export default rootReducer;
