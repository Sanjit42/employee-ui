import {expect} from 'chai';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";

import * as types from '../constants/constant';
import * as genderActions from './genderActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Gender Actions', () => {
  describe('Load Gender', () => {
    it('should create a LOAD_GENDER_SUCCESS action', () => {
      const gender = ['Male', 'Female'];

      const expected = {
        type: types.LOAD_GENDER_SUCCESS,
        gender: gender
      };

      let action = genderActions.loadGenderSuccess(gender);
      expect(action).to.deep.equal(expected);
    });
  });

  describe('Async Gender Action', () => {
    afterEach(() => {
      nock.cleanAll();
    });
    it('should create BEGIN_AJAX_CALL and LOAD_GENDER_SUCCESS when loading gender', (done) => {
      const expectedAction = [
        {type: types.BEGIN_AJAX_CALL},
        {
          type: types.LOAD_GENDER_SUCCESS,
          body: {gender: ['Male', 'Female']}
        }
      ];
      const store = mockStore({gender: []}, expectedAction);
      store.dispatch(genderActions.loadGender()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).to.equal(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).to.equal(types.LOAD_GENDER_SUCCESS);
        done();
      });
    });
  });
});
