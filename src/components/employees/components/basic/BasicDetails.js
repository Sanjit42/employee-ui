import React from 'react';

const BasicDetails = ({basicDetails}) => {
  return (
    <div>
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

export default BasicDetails;
