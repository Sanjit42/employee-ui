import {expect} from 'chai';

import * as types from '../constants/constant';
import * as ratingActions from './ratingActions';


describe('Rating Actions', () => {
  describe('Load Rating', () => {
    it('should create a UPDATE_RATING_SUCCESS action', () => {
      const rating = [{java: 3}, {AWS: 3}];

      const expected = {
        type: types.UPDATE_RATING_SUCCESS,
        rating: rating
      };

      let action = ratingActions.updateRatingSuccess(rating);
      expect(action).to.deep.equal(expected);
    });
  });
});
