/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as types from '../../constants/constant';
import * as capabilityActions from '../capabilityActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Skills Actions', () => {
  describe('Load Skills', () => {
    it('should create a UPDATE_SKILLS_SUCCESS action', () => {
      const skills = [{technical: []}, {testing: []}];

      const expected = {
        type: types.UPDATE_SKILLS_SUCCESS,
        skills: skills
      };

      let action = capabilityActions.saveSkillsSuccess(skills);
      expect(action).toEqual(expected);
    });
  });

  describe('Async Skills Action', () => {
    afterEach(() => {
      nock.cleanAll();
    });
    describe('Load Skills', () => {
      it('should create BEGIN_AJAX_CALL and LOAD_SKILLS_SUCCESS when loading skills', (done) => {
        const expectedAction = [
          {type: types.BEGIN_AJAX_CALL},
          {
            // eslint-disable-next-line import/namespace
            type: types.LOAD_SKILLS_SUCCESS,
            body: {skills: {employeeId: 32, technical: {}, domain: {}}}
          }
        ];
        const store = mockStore({skills: {}}, expectedAction);
        store.dispatch(capabilityActions.loadSkills()).then(() => {
          const actions = store.getActions();
          expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
          // eslint-disable-next-line import/namespace
          expect(actions[1].type).toEqual(types.LOAD_SKILLS_SUCCESS);
          done();
        });
      });
    });

    describe('Save Skills', () => {
      it('should create BEGIN_AJAX_CALL and UPDATE_SKILLS_SUCCESS when save skills', (done) => {
        const expectedAction = [
          {type: types.BEGIN_AJAX_CALL},
          {
            type: types.UPDATE_SKILLS_SUCCESS,
            body: {skills: {employeeId: 32, technical: {}, domain: {}}}
          }
        ];
        const skills = [
          {subset: 'technical', aws: 2, employeeId: 3},
          {subset: 'consulting', communication: 1, employeeId: 2},
          {subset: 'domain', government: 5, employeeId: 2}
        ];

        const id = 2;
        const store = mockStore({skills: {}}, expectedAction);
        store.dispatch(capabilityActions.saveSkills(skills, 2)).then(() => {
          const actions = store.getActions();
          expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
          expect(actions[1].type).toEqual(types.UPDATE_SKILLS_SUCCESS);
          done();
        });
      });
    });
  });
});
