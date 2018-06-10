/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as types from '../constants/constant';
import * as homeOfficesActions from './homeOfficesActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Home Offices Actions', () => {
  describe('Load Home Offices', () => {
    it('should create a LOAD_HOME_OFFICE_SUCCESS action', () => {
      const homeOffices = ['Bangalore', 'Hyderabad'];

      const expected = {
        type: types.LOAD_HOME_OFFICE_SUCCESS,
        homeOffices: homeOffices
      };

      let action = homeOfficesActions.loadHomeOfficeSuccess(homeOffices);
      expect(action).toEqual(expected);
    });
  });

  describe('Async Home office Action', () => {
    afterEach(() => {
      nock.cleanAll();
    });
    it('should create BEGIN_AJAX_CALL and LOAD_HOME_OFFICE_SUCCESS when loading homeOffices', (done) => {
      const expectedAction = [
        {type: types.BEGIN_AJAX_CALL},
        {
          type: types.LOAD_HOME_OFFICE_SUCCESS,
          body: {homeOffices: ['Hyderabad', 'Chennai']}
        }
      ];
      const store = mockStore({homeOffices: [{}]}, expectedAction);
      store.dispatch(homeOfficesActions.loadHomeOffices()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.LOAD_HOME_OFFICE_SUCCESS);
        done();
      });
    });
  });
});
