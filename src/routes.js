import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import AboutApp from './components/aboutApp/AboutPage';
import HomePage from './components/homePage/HomePage';
import ManageEmployeePage from './components/employees/ManageEmployeePage';
import EmployeePage from './components/employees/EmployeePage';
import ViewEmployee from './components/employees/ViewEmployee';
import SkillsAndAbilities from './components/skillAndAbility/components/common/SkillsAndAbilities';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="employees" component={EmployeePage}/>
    <Route path="employee" component={ManageEmployeePage}/>
    <Route path="employee/:id" component={ViewEmployee}/>
    <Route path="skillsAndAbilities" component={SkillsAndAbilities}/>
    <Route path="about" component={AboutApp}/>
  </Route>
);
