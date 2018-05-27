import * as types from '../constants/constant';

export default function employeeReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_EMPLOYEE_SUCCESS :
      return [...state,
        Object.assign({}, action.employee)];
    case types.UPDATE_EMPLOYEE_SUCCESS:
      return [
        ...state.filter(employee => employee.id !== action.employee.id),
        Object.assign({}, action.employee)
      ];
    case types.LOAD_EMPLOYEES_SUCCESS:
      return action.employees;
    default:
      return state;
  }
}
