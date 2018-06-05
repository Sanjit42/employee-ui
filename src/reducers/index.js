/* eslint-disable import/default */
import {combineReducers} from 'redux';

import ajaxCallsInProgress from './ajaxStatusReducer';
import skillsAndAbilities from './skillsAndAbilitiesReducer';
import employees from './employeeReducer';
import homeOffices from './homeOfficesReducer';
import gender from './genderReducer';
import avatar from './avatarReducer';
import rating from './ratingReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  skillsAndAbilities,
  employees,
  homeOffices,
  gender,
  avatar,
  rating
});

export default rootReducer;
