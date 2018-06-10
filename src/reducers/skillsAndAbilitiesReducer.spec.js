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

  it('should upload employee skills and abilities', () => {
    let initialState = [];
    const action = {
      type: types.UPDATE_SKILLS_AND_ABILITIES_SUCCESS,
      skillsAndAbilities: [{
          employeeId: 2,
          technical: {'AWS': 2, 'Java': 3},
          testing: {'capybara': 2}
        }]
    };
    let wrapper = skillsAndAbilities(initialState, action);
    expect(wrapper.length).toEqual(1);
  });
});
