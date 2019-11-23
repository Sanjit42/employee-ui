import React from 'react';
import PropTypes from 'prop-types';
import {Link, IndexLink} from 'react-router-dom';

import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName> Home </IndexLink>
      {" | "}
      <Link to="about" activeClassName> About </Link>
      {" | "}
      <Link to="employees" activeClassName> Employees </Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
