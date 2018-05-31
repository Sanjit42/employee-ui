/* eslint-disable import/namespace */
import * as types from '../constants/constant';
import initialState from './initialState';

export default function ratingReducer(state = initialState.rating, action) {
  switch (action.type) {
    case types.UPDATE_RATING_SUCCESS:
      return [...state, Object.assign({}, action.rating)];
    default:
      return state;
  }
}
