/* eslint-disable import/namespace */
import React from 'react';
import * as types from '../constants/constant';

export default function skillsAndAbilitiesReducer(state = [], actions) {
  switch (actions.type) {
    case types.LOAD_SKILLS_AND_ABILITIES_SUCCESS:
      return actions.skillsAndAbilities;
    default:
      return state;
  }
}
