/* eslint-disable no-undef */
import React from 'react';

import * as types from '../../constants/constant';
import ajaxStatusReducer from '../ajaxStatusReducer';

describe('Avatar Reducer', () => {
  it('should increase state if type is BEGIN_AJAX_CALL', () => {
    let state = 0;
    let action = {
      type: types.BEGIN_AJAX_CALL
    };

    expect(ajaxStatusReducer(state, action)).toEqual(1);
  });

  it('should reduce state if type is AJAX_CALL_ERROR', () => {
    let state = 4;
    let action = {
      type: types.AJAX_CALL_ERROR
    };

    expect(ajaxStatusReducer(state, action)).toEqual(3);
  });

  it('should reduce state if action is success', () => {
    let state = 2;
    let action = {
      type: types.LOAD_AVATAR_SUCCESS
    };

    expect(ajaxStatusReducer(state, action)).toEqual(1);
  });
});
