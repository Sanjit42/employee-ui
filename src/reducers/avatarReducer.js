import * as types from '../constants/constant';

export default function avatarReducer(state = [], action) {
  switch (action.type) {
    case types.UPDATE_AVATAR_SUCCESS:
      return action.avatar;
    default:
      return state;
  }
}
