/* eslint-disable import/namespace */
import * as types from '../constants/constant';
import initialState from './initialState';

export default function technicalRatingReducer(state = initialState.technical, action) {
  switch (action.type) {
    case types.UPDATE_TECHNICAL_RATING_SUCCESS:
      return[
        Object.assign([],
        state.filter(each => {
          if(each.employeeId == action.updateRating[0].employeeId)
          return each.skills;
          }), action.updateRating[0].skills
        )];
    default:
      return state;
  }
}

//state = [{employeeId:3, skills: [{r:2},{t:4}]}]
//updateRating = {employeeId: 3, skills: [{r:5}]}
