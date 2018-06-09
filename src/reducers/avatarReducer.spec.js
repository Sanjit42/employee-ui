/* eslint-disable import/namespace */
import React from 'react';
import {expect} from 'chai';

import * as types from '../constants/constant';
import avatarReducer from './avatarReducer';

describe('Avatar Reducer', () => {
  it('should return default state when action type does not match', () => {
    let action = {
      type: 'LOAD_AVATAR',
      avatar: [{
        employeeId: 2,
        avatar: 'imageUrl'
      }]
    };
    let initialState = [];
    let wrapper = avatarReducer(initialState, action);
    expect(wrapper).to.deep.equal([]);
  });

  it('should load avatar', () => {
    let initialState = [];
    const action = {
      type: types.LOAD_AVATAR_SUCCESS,
      avatar: [{
        employeeId: 2,
        avatar: 'imageUrl'
      }]
    };

    let wrapper = avatarReducer(initialState, action);
    expect(wrapper.length).to.equal(1);
  });

  it('should update avatar', () => {
    let initialState = [{
      employeeId: 1,
      avatar: 'imageUrl'
    }];
    const action = {
      type: types.UPDATE_AVATAR_SUCCESS,
      avatar: [{
        employeeId: 2,
        avatar: 'imageUrl'
      }]
    };

    let wrapper = avatarReducer(initialState, action);
    expect(wrapper.length).to.equal(1);
  });
});
