/* eslint-disable no-undef */
import React from 'react';

import * as types from '../constants/constant';
import ratingReducer from './ratingReducer';

describe('Rating Reducer', () => {
  it('should return default value', () => {
    let initialState = [];
    let action = {
      type: 'UPDATE_RATING',
      rating: []
    };
    let wrapper = ratingReducer(initialState, action);
    expect(wrapper).toEqual([]);
  });

  it('should update rating', () => {
    let initialState = [];
    let action = {
      type: types.UPDATE_RATING_SUCCESS,
      rating: {employeeId: 2, java: 2, subset: 'technical'}
    };
    let wrapper = ratingReducer(initialState, action);
    expect(wrapper.length).toEqual(1);
  });
});
