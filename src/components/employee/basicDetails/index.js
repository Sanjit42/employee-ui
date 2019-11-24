import React from 'react';
import PropTypes from 'prop-types';

const BasicDetails = ({basicDetails}) => {
  return (
    <div className="row">
      <div className="basic-details">
        <div className="name-section">
          <div className="preferred-name d-inline">{basicDetails.name}</div>
          <div className="employee-id d-inline">ID: {basicDetails.employeeId}</div>
          <span className="department-name d-inline"> PROFESSIONAL SERVICES</span>
        </div>
        <div className="gender">{basicDetails.gender}</div>
        <div className="primary-role">
          <div className="d-inline role">{basicDetails.role}</div>
          <div className="d-inline grade">Consultant</div>
        </div>
        <div className="experience">
          <div className="mb-2">2 years and 4 months of total experience , 2
            years
            and 4 months at TW
          </div>
          <div>Hired on Jul-10-2017</div>
        </div>
        <div className="assign-summary">
          <div className="d-inline profile-assignable">ASSIGNABLE</div>
          <div className="d-inline current-project">Assigned to Otto GmbH and Co KG - Deep Sea Sprint 32-36 from
            Oct-03-2019 to Dec-11-2019.
          </div>
        </div>
        <div className="offices-summary">
          <div className="mb-2">Employed by {basicDetails.homeOffice} (Home Office)</div>
          <div className="mb-2">Staffed by {basicDetails.homeOffice} (Staffing Office)</div>
          <div>Working for {basicDetails.homeOffice} (Working Office)</div>
        </div>
      </div>
    </div>
  );
};

BasicDetails.propTypes = {
  basicDetails: PropTypes.object.isRequired
};

export default BasicDetails;
