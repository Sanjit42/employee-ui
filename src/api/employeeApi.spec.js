import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import employeeApi from './employeeApi';

describe('EmployeeApi', () => {
  it.only('should split skills', () => {
    let skills = [
      {employeeId: 1, subset: 'Domain', 'AWS': 4},
      {employeeId: 2, subset: 'Domain', 'java': 3},
      {employeeId: 3, Communication: 4, subset: 'Consulting'},
      {employeeId: 2, 'mocha': 2, subset: 'Testing'},
      {employeeId: 2, 'Executive Advisory': 2, subset: 'Consulting'},
      {employeeId: 2, 'Facilitation': 1, subset: 'Consulting'}
    ];
    let result = employeeApi.saveSkillsAndAbilities(skills, 2);
    expect(result).to.deep.equal([{'java': 3}]);
  });
})
;
