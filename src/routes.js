import React from 'react';
import {Route, IndexRoute} from 'react-router-dom';
import App from './components/App';
import AboutApp from './components/aboutApp/AboutPage';
import HomePage from './components/homePage/HomePage';
import ManageEmployeePage from './components/employee/manageEmployee/ManageEmployeePage';
import EmployeePage from './components/employee';
import ViewEmployee from './components/employee/manageEmployee/ViewEmployee';


const Routes = () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="employees" component={EmployeePage}/>
      <Route path="employee" component={ManageEmployeePage}/>
      <Route path="employees/:id" component={ViewEmployee}/>
      <Route path="about" component={AboutApp}/>
    </Route>
  )
}

export default Routes;
