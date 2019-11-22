import React from 'react';
import PropTypes from 'prop-types'

const BasicDetails = ({basicDetails}) => {
  return (
    <div className="basic-details">
      <div>{basicDetails.name}</div>
      <div>{basicDetails.gender}</div>
      <span>ID: {basicDetails.employeeId}</span>
      <span> PROFESSIONAL SERVICES</span>
      <div>{basicDetails.role}</div>
      <div>{basicDetails.currentProject}</div>
      <div>{basicDetails.homeOffice}</div>
    </div>
  );
};

BasicDetails.propTypes = {
  basicDetails: PropTypes.object.isRequired
};

export default BasicDetails;
