/* eslint-disable no-undef */
import React from 'react';

import * as types from '../constants/constant';
import skillsAndAbilities from './skillsAndAbilitiesReducer';

describe('SkillsAndAbilities Reducer', () => {
  it('should return default state when action type does not match', () => {
    let action = {
      type: 'UPDATE_SKILLS_AND_ABILITIES',
      employee: {}
    };
    let initialState = [];
    let wrapper = skillsAndAbilities(initialState, action);
    expect(wrapper).toEqual([]);
  });

  it('should load employee skills and abilities', () => {
    let initialState = [];
    const action = {
      type: types.LOAD_SKILLS_AND_ABILITIES_SUCCESS,
      skillsAndAbilities: [{
        employeeId: 2,
        technical: {'AWS': 2, 'Java': 3},
        testing: {'capybara': 2}
      }]
    };

    let wrapper = skillsAndAbilities(initialState, action);
    expect(wrapper.length).toEqual(1);
  });

  it('should update employee skills and abilities', () => {
    let initialState = [
      {
        employeeId: 1,
        technical: {'AWS': 2, 'Java': 3},
        testing: {'capybara': 2}
      },
      {
        employeeId: 2,
        technical: {'AWS': 2, 'Java': 3},
        testing: {'capybara': 2}
      }];

    const action = {
      type: types.UPDATE_SKILLS_AND_ABILITIES_SUCCESS,
      skillsAndAbilities: {
        employeeId: 2,
        technical: {'AWS': 4, 'Java': 4},
        testing: {'capybara': 4}
      }
    };

    let expected = [
      {
        employeeId: 1,
        technical: {'AWS': 2, 'Java': 3},
        testing: {'capybara': 2}
      }, {
        employeeId: 2,
        technical: {'AWS': 4, 'Java': 4},
        testing: {'capybara': 4}
      }
    ];

    let wrapper = skillsAndAbilities(initialState, action);
    expect(wrapper.length).toEqual(2);
    expect(wrapper).toEqual(expected);
  });


  it('should update only new changes fields', () => {
    let initialState = [
      {
        employeeId: 1,
        technical: {AWS: 2, Java: 3},
        consulting: {communication: 4, planning: 3, questioning: 2},
        domain: {government: 4, education: 2},
        testing: {capybara: 2, cucumber: 2}
      },
      {
        employeeId: 2,
        technical: {AWS: 2, Java: 3},
        consulting: {communication: 4, planning: 2, questioning: 1},
        domain: {government: 1, education: 2},
        testing: {capybara: 2, cucumber: 0}
      }];

    const action = {
      type: types.UPDATE_SKILLS_AND_ABILITIES_SUCCESS,
      skillsAndAbilities: {
        employeeId: 2,
        technical: {Java: 4},
        domain: {government: 3},
        testing: {capybara: 1, cucumber: 4},
        consulting: { planning: 3, questioning: 2}
      }
    };

    let expected = [
      {
        employeeId: 1,
        technical: {AWS: 2, Java: 3},
        consulting: {communication: 4, planning: 3, questioning: 2},
        domain: {government: 4, education: 2},
        testing: {capybara: 2, cucumber: 2}
      },
      {
        employeeId: 2,
        technical: {AWS: 2, Java: 4},
        consulting: {communication: 4, planning: 3, questioning: 2},
        domain: {government: 3, education: 2},
        testing: {capybara: 1, cucumber: 4}
      }
    ];

    let wrapper = skillsAndAbilities(initialState, action);
    expect(wrapper).toEqual(expected);
    expect(wrapper.length).toEqual(2);
  });
});
