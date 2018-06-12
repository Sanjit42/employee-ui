/* eslint-disable no-undef */
import React from 'react';

import * as types from '../constants/constant';
import homeOffices from './homeOfficesReducer';

describe('Home Office Reducer', () => {
  it('should return default home Office names list if action type not match', function () {
    let state = ['Hyderabad'];
    let action = {
      type: 'LOAD_HOME_OFFICE',
      homeOffices: []
    };
    expect(homeOffices(state, action)).toEqual(['Hyderabad']);
  });

  it('should return homeOffices list', function () {
    let state = ['Hyderabad'];
    let action = {
      type: types.LOAD_HOME_OFFICE_SUCCESS,
      homeOffices: ['Bangalore', 'Kolkata']
    };
    expect(homeOffices(state, action)).toEqual(['Bangalore', 'Kolkata']);
  });
});
