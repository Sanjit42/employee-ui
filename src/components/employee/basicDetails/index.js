import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'

import {getCustomDate} from "../../utills";

const BasicDetails = ({employee}) => {
  return (
    <div className="row">
      <div className="basic-details">
        <div className="name-section">
          <div className="preferred-name d-inline">{employee.name}</div>
          <div className="employee-id d-inline">ID: {employee.employeeId}</div>
          <span className="department-name d-inline"> PROFESSIONAL SERVICES</span>
        </div>
        <div className="gender">{employee.gender}</div>
        <div className="primary-role">
          <div className="d-inline role">{employee.role}</div>
          <div className="d-inline grade">Consultant</div>
        </div>
        <div className="experience">
          <div className="mb-2"> {`${getCustomDate(employee.totalExperience)} of total experience ${getCustomDate(employee.hiredOn)} at TW`}</div>
          <div>Hired on {moment(employee.hiredOn).format('ll') }</div>
        </div>
        <div className="assign-summary">
          <div className="d-inline profile-assignable">ASSIGNABLE</div>
          <div className="d-inline current-project">Assigned to Otto GmbH and Co KG - Deep Sea Sprint 32-36 from
            Oct-03-2019 to Dec-11-2019.
          </div>
        </div>
        <div className="offices-summary">
          <div className="mb-2">Employed by {employee.homeOffice} (Home Office)</div>
          <div className="mb-2">Staffed by {employee.homeOffice} (Staffing Office)</div>
          <div>Working for {employee.homeOffice} (Working Office)</div>
        </div>
      </div>
    </div>
  );
};

BasicDetails.propTypes = {
  employee: PropTypes.object.isRequired
};

export default BasicDetails;
