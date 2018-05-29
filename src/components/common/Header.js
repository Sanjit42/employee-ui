import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName> Home </IndexLink>
      {" | "}
      <Link to="about" activeClassName> About </Link>
      {" | "}
      <Link to="employees" activeClassName> Employees </Link>
      {" | "}
      <Link to="employee" activeClassName> Add Employee </Link>
      {" | "}
      <Link to="skillsAndAbilities" activeClassName> Skills And Abilities </Link>
    </nav>
  );
};

export default Header;
