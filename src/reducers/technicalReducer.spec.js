// import React from 'react';
// import {expect} from 'chai';
// import {shallow} from 'enzyme';
//
// import technicalReducer from './technicalReducer';
//
// describe('TechnicalReducer', () => {
//   it('should marge array', function () {
//     let action = {
//       type: 'UPDATE_TECHNICAL_SKILLS_SUCCESS',
//       updateRating: [{employeeId: 12, skills: [{'java': 4}]}]
//     };
//
//     let initialState = [{employeeId: 12, skills: [{'java': 2}, {'AWS': 4}]}]
//
//     let expectResult = [{employeeId: 12, skills: [{'java': 4}, {'AWS': 4}]}];
//     // console.log(technicalReducer(initialState, action));
//
//     console.log((Object.assign([],[{'java': 2}, {'AWS': 4}], [{'java': 4}])),'---------------------')
//
//     expect(technicalReducer(initialState, action)).to.deep.equal(expectResult);
//
//   });
// });
