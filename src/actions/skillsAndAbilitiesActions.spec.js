import * as types from '../constants/constant';
import {expect} from 'chai';

import * as skillsAndAbilitiesActions from './skillsAndAbilitiesActions';

describe('Skills And Abilities Actions', () => {
  describe('Load Skills And Abilities', () => {
    it('should create a SAVE_SKILLS_AND_ABILITIES_SUCCESS action', () => {
      const skillsAndAbilities = [{technical: []}, {testing: []}];

      const expected = {
        type: types.SAVE_SKILLS_AND_ABILITIES_SUCCESS,
        skillsAndAbilities: skillsAndAbilities
      };

      let action = skillsAndAbilitiesActions.saveSkillsAndAbilitiesSuccess(skillsAndAbilities);
      expect(action).to.deep.equal(expected);
    });
  });
});
