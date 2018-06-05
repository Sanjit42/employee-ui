import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import AboutApp from './components/aboutApp/AboutPage';
import HomePage from './components/homePage/HomePage';
import ManageEmployeePage from './components/employees/components/addAndManageEmployee/ManageEmployeePage';
import EmployeePage from './components/employees/components/addAndManageEmployee/EmployeePage';
import ViewEmployee from './components/employees/components/addAndManageEmployee/ViewEmployee';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="employees" component={EmployeePage}/>
    <Route path="employee" component={ManageEmployeePage}/>
    <Route path="employees/:id" component={ViewEmployee}/>
    <Route path="about" component={AboutApp}/>
  </Route>
);
