/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as types from '../../constants/constant';
import * as ratingActions from '../ratingActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Rating Actions', () => {
  describe('Load Rating', () => {
    it('should create a UPDATE_RATING_SUCCESS action', () => {
      const rating = [{java: 3}, {AWS: 3}];

      const expected = {
        type: types.UPDATE_RATING_SUCCESS,
        rating: rating
      };

      let action = ratingActions.updateRatingSuccess(rating);
      expect(action).toEqual(expected);
    });
  });

  describe('Async Rating Action', () => {
    afterEach(() => {
      nock.cleanAll();
    });
    it('should create BEGIN_AJAX_CALL and LOAD_RATING_SUCCESS when update rating', (done) => {
      const expectedAction = [
        {type: types.BEGIN_AJAX_CALL},
        {
          type: types.UPDATE_RATING_SUCCESS,
          body: {rating: []}
        }
      ];
      const rating = 2, title = "java", template = "technical";
      const store = mockStore({rating: [{}]}, expectedAction);
      store.dispatch(ratingActions.updateRatingValue(rating, title, template)).then(rating => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.UPDATE_RATING_SUCCESS);
        done();
      });
    });
    });
});
