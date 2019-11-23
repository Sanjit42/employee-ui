import React from 'react';
import PropTypes from 'prop-types';
import EmployeeListRow from './EmployeeListRow';

const EmployeeList = ({employees}) => {
  return (
    <div>
      <table className="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Employ Id</th>
          <th>Role</th>
          <th>Current Project</th>
          <th>Home Office</th>
        </tr>
        </thead>
        <tbody>
        {employees.map((employee, i) =>
          <EmployeeListRow key={i} employee={employee}/>
        )}
        </tbody>
      </table>
    </div>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired
};

export default EmployeeList;
