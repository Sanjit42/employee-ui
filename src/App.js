import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NavBar from './components/common/navBar';
import EmployeePage from "./components/employees/addAndManageEmployee/EmployeePage";
import ViewEmployee from "./components/employees/addAndManageEmployee/ViewEmployee";
import AboutApp from "./components/aboutApp/AboutPage";
import ManageEmployeePage from "./components/employees/addAndManageEmployee/ManageEmployeePage";

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
            <Route path="/employees/:id" component={ViewEmployee}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
