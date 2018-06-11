/* eslint-disable import/namespace */
import * as types from '../constants/constant';
import initialState from './initialState';

export default function avatarReducer(state = initialState.avatar, action) {
  switch (action.type) {
    case types.UPDATE_AVATAR_SUCCESS:
      return [
        ...state.filter(each => each.employeeId !== action.avatar.employeeId),
        Object.assign({}, action.avatar)
      ];
    case types.LOAD_AVATAR_SUCCESS:
      return action.avatar;
    default:
      return state;
  }
}
