/* eslint-disable import/namespace */
import React from 'react';
import {expect} from 'chai';

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
    expect(wrapper).to.deep.equal([]);
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
    expect(wrapper.length).to.equal(1);
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
    expect(wrapper.length).to.deep.equal(2);
    expect(wrapper).to.deep.equal(expected);
  });
});
