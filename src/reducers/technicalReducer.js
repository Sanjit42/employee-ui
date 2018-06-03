/* eslint-disable import/namespace */
import * as types from '../constants/constant';
import initialState from './initialState';

export default function ratingReducer(state = initialState.technical, action) {
  switch (action.type) {

    case types.LOAD_TECHNICAL_SKILLS_SUCCESS:
      return action.technicalSkills;

    // case types.UPDATE_TECHNICAL_SKILLS_SUCCESS:
    //   console.log(state.filter(each => {
    //     if (each.employeeId == action.updateRating[0].employeeId)
    //       return each;
    //   }), '---------------4-------------');
    //
    //   return [
    //     Object.assign([],
    //       state.filter(each => {
    //         console.log(each.skills,'**');
    //         if (each.employeeId == action.updateRating[0].employeeId)
    //           return each.skills;
    //       }), action.updateRating[0].skills
    //     )];
    // // return Object.assign([],
    // //   ...state.filter(tech => tech.employeeId == action.updateTechnicalSkills.employeeId),
    // //   action.updateTechnicalSkills);
    default:
      return state;
  }
}
