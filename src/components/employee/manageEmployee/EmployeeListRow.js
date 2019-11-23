import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const EmployeeListRow = ({employee}) => {
  return (
    <tr>
      <td>
        <Link to={`/employees/${employee.employeeId}`}> {employee.name}</Link>
    </td>
      <td>{employee.gender}</td>
      <td>{employee.employeeId}</td>
      <td>{employee.role}</td>
      <td>{employee.currentProject}</td>
      <td>{employee.homeOffice}</td>
    </tr>
  );
};

EmployeeListRow.propTypes = {
  employee: PropTypes.object.isRequired
};

export default EmployeeListRow;
