import * as types from '../constants/constant';
import initialState from './initialState';

export default function employeeReducer(state = initialState.employees, action) {
  switch (action.type) {
    case types.CREATE_EMPLOYEE_SUCCESS :
      return [...state,
        Object.assign({}, action.employee)];
    case types.LOAD_EMPLOYEES_SUCCESS:
      return action.employees;
    default:
      return state;
  }
}
