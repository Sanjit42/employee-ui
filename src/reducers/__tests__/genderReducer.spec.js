/* eslint-disable no-undef */
import React from 'react';

import * as types from '../../constants/constant';
import initialState from '../initialState';
import gender from '../genderReducer';

describe('Gender Reducer', () => {
  it('should return default gender list if action type not match', () => {
    let state = ['Male'];
    let action = {
      type: 'LOAD_GENDER',
      gender: ['Male', 'Female']
    };
    expect(gender(state, action)).toEqual(['Male']);
  });

  it('should return gender list', () => {
    let state = ['Male'];
    let action = {
      type: types.LOAD_GENDER_SUCCESS,
      gender: ['Male', 'Female']
    };
    expect(gender(state, action)).toEqual(['Male', 'Female']);
  });
});
