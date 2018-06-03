import {expect} from 'chai';

import * as types from '../constants/constant';
import * as homeOfficesActions from './homeOfficesActions';

describe('Home Offices Actions', () => {
  describe('Load Home Offices', () => {
    it('should create a LOAD_HOME_OFFICE_SUCCESS action', () => {
      const homeOffices = ['Bangalore', 'Hyderabad'];

      const expected = {
        type: types.LOAD_HOME_OFFICE_SUCCESS,
        homeOffices: homeOffices
      };

      let action = homeOfficesActions.loadHomeOfficeSuccess(homeOffices);
      expect(action).to.deep.equal(expected);
    });
  });
});
