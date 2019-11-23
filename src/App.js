import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NavBar from './components/common/NavBar';
import EmployeePage from "./components/employee";
import EmployeeDetails from "./components/employee/employeeDetails";
import AboutApp from "./components/aboutApp/AboutPage";
import ManageEmployeePage from "./components/employee/employeeForm";

class App extends React.Component {
  render(){
    return (
      <div>
        <NavBar/>
        <main className="container">
          <Switch>
            <Route exact path="/" component={AboutApp}/>
            <Route path="/employee" component={ManageEmployeePage}/>
            <Route path="/employee-list" component={EmployeePage}/>
            <Route path="/employees/:id" component={EmployeeDetails}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
