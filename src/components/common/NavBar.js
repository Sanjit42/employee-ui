import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <Link className="navbar-brand" to="/">Jigsaw</Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/">About<span
            className="sr-only">(current)</span></NavLink>
          <React.Fragment>
            <NavLink className="nav-item nav-link" to="/employee-list">Employees</NavLink>
            <NavLink className="nav-item nav-link" to="/register">Register</NavLink>
            <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
          </React.Fragment>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
