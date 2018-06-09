import {expect} from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as types from '../constants/constant';
import * as skillsAndAbilitiesActions from './skillsAndAbilitiesActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('Skills And Abilities Actions', () => {
  describe('Load Skills And Abilities', () => {
    it('should create a UPDATE_SKILLS_AND_ABILITIES_SUCCESS action', () => {
      const skillsAndAbilities = [{technical: []}, {testing: []}];

      const expected = {
        type: types.UPDATE_SKILLS_AND_ABILITIES_SUCCESS,
        skillsAndAbilities: skillsAndAbilities
      };

      let action = skillsAndAbilitiesActions.saveSkillsAndAbilitiesSuccess(skillsAndAbilities);
      expect(action).to.deep.equal(expected);
    });
  });

  describe('Async Skills and Abilities Action', () => {
    afterEach(() => {
      nock.cleanAll();
    });
    describe('Load Skills and Abilities', () => {
      it('should create BEGIN_AJAX_CALL and LOAD_SKILLS_AND_ABILITIES_SUCCESS when loading skills and abilities', (done) => {
        const expectedAction = [
          {type: types.BEGIN_AJAX_CALL},
          {
            type: types.LOAD_SKILLS_AND_ABILITIES_SUCCESS,
            body: {skillsAndAbilities: {employeeId: 32, technical: {}, domain: {}}}
          }
        ];
        const store = mockStore({skillsAndAbilities: {}}, expectedAction);
        store.dispatch(skillsAndAbilitiesActions.loadSkillsAndAbilities()).then(() => {
          const actions = store.getActions();
          expect(actions[0].type).to.equal(types.BEGIN_AJAX_CALL);
          expect(actions[1].type).to.equal(types.LOAD_SKILLS_AND_ABILITIES_SUCCESS);
          done();
        });
      });
    });

    describe('Save Skills and Abilities', () => {
      it('should create BEGIN_AJAX_CALL and UPDATE_SKILLS_AND_ABILITIES_SUCCESS when save skills and abilities', (done) => {
        const expectedAction = [
          {type: types.BEGIN_AJAX_CALL},
          {
            type: types.UPDATE_SKILLS_AND_ABILITIES_SUCCESS,
            body: {skillsAndAbilities: {employeeId: 32, technical: {}, domain: {}}}
          }
        ];
        const skillsAndAbilities = [
          {subset: 'technical', aws: 2, employeeId: 3},
          {subset: 'consulting', communication: 1, employeeId: 2},
          {subset: 'domain', government: 5, employeeId: 2}
        ];

        const id = 2;
        const store = mockStore({skillsAndAbilities: {}}, expectedAction);
        store.dispatch(skillsAndAbilitiesActions.saveSkillsAndAbilities(skillsAndAbilities, 2)).then(() => {
          const actions = store.getActions();
          expect(actions[0].type).to.equal(types.BEGIN_AJAX_CALL);
          expect(actions[1].type).to.equal(types.UPDATE_SKILLS_AND_ABILITIES_SUCCESS);
          done();
        });
      });
    });
  });
});
